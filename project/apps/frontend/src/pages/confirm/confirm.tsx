import { useEffect, useState } from 'react';
import { State } from '../../types';
import { Layout } from '../../components';
import { CircularProgress } from '@mui/material';
import { useParams } from 'react-router-dom';
import { selectUser, useAppSelector } from '../../store';
import { confirmUser } from '../../api';
import { Expired } from './expired';
import { Error } from './error';
import { ActivationSuccessMessage } from './success';

enum ErrorType {
    TOKEN_NOT_FOUND = 'token no found',
    UNKNOWN = 'unknown',
}

export const Confirm = () => {
    const [state, setState] = useState<State>();
    const [error, setError] = useState<ErrorType | null>(null);

    const { id: token } = useParams();
    const user = useAppSelector(selectUser);

    const errorHandle = (error: ErrorType) => {
        setState('error');
        setError(error);
    };

    useEffect(() => {
        if (!token || !user) {
            errorHandle(ErrorType.UNKNOWN);
            return;
        }

        setState('loading');

        confirmUser(user.id, token)
            .then((response) => {
                const { statusCode } = response;

                switch (statusCode) {
                    case 200:
                        setState('fulfilled');
                        break;
                    case 404:
                        errorHandle(ErrorType.TOKEN_NOT_FOUND);
                        break;
                    default:
                        errorHandle(ErrorType.UNKNOWN);
                }
            })
            .catch(() => {
                errorHandle(ErrorType.UNKNOWN);
            });
    }, [token, user]);

    return (
        <Layout>
            {state === 'loading' && <CircularProgress />}
            {state === 'error' && (
                <h2>
                    {error === ErrorType.TOKEN_NOT_FOUND ? (
                        <Expired />
                    ) : (
                        <Error />
                    )}
                </h2>
            )}
            {state === 'fulfilled' && <ActivationSuccessMessage />}
        </Layout>
    );
};
