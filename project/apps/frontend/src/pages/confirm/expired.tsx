import { EmailConfirmation } from './email-confirmaiton';
import { IconMessage } from './icon-message';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export const Expired = () => {
    return (
        <EmailConfirmation
            defaultIcon={<IconMessage icon={<MailOutlineIcon />} />}
            successIcon={
                <IconMessage
                    icon={<CheckCircleOutlineIcon />}
                    color="success.main"
                />
            }
            errorIcon={
                <IconMessage icon={<ErrorOutlineIcon />} color="error.main" />
            }
            defaultTitle="Срок действия ссылки истёк"
            successTitle="Письмо отправлено!"
            errorTitle="Ошибка отправки"
            defaultMessage={`
                Ссылка для активации вашего аккаунта больше не действительна.
                Пожалуйста, запросите новую ссылку для завершения регистрации.
            `}
            successMessage="Новое письмо с ссылкой для активации успешно отправлено на вашу почту."
            errorMessage="Произошла ошибка при отправке письма. Пожалуйста, попробуйте ещё раз."
            buttonLabel="Отправить письмо повторно"
        />
    );
};
