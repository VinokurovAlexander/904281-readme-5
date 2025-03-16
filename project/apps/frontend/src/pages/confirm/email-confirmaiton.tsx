import { useState } from 'react';
import { useAppSelector, selectUser } from '../../store';
import { updateConfirm } from '../../api';
import { MessageCard } from './card-message';
import { ReactNode } from 'react';

interface EmailConfirmationProps {
    defaultIcon: ReactNode;
    successIcon: ReactNode;
    errorIcon: ReactNode;
    defaultTitle: string;
    successTitle: string;
    errorTitle: string;
    defaultMessage: string;
    successMessage: string;
    errorMessage: string;
    buttonLabel: string;
}

export const EmailConfirmation = ({
    defaultIcon,
    successIcon,
    errorIcon,
    defaultTitle,
    successTitle,
    errorTitle,
    defaultMessage,
    successMessage,
    errorMessage,
    buttonLabel,
}: EmailConfirmationProps) => {
    const user = useAppSelector(selectUser);
    const [state, setState] = useState<
        'idle' | 'loading' | 'fulfilled' | 'error'
    >('idle');

    const handleResendEmail = () => {
        if (!user) return;

        setState('loading');

        updateConfirm(user.id)
            .then((response) => {
                setState(response.statusCode === 200 ? 'fulfilled' : 'error');
            })
            .catch(() => {
                setState('error');
            });
    };

    let icon: React.ReactNode;
    let title: string;
    let message: string;
    let buttonProps:
        | { loading: boolean; onClick: () => void; label: string }
        | undefined;

    if (state === 'fulfilled') {
        icon = successIcon;
        title = successTitle;
        message = successMessage;
    } else if (state === 'error') {
        icon = errorIcon;
        title = errorTitle;
        message = errorMessage;
    } else {
        icon = defaultIcon;
        title = defaultTitle;
        message = defaultMessage;
        buttonProps = {
            loading: state === 'loading',
            onClick: handleResendEmail,
            label: buttonLabel,
        };
    }

    return (
        <MessageCard
            icon={icon}
            title={title}
            message={message}
            buttonProps={buttonProps}
        />
    );
};
