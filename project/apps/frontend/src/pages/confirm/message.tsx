import { Layout } from '../../components';
import {
    Box,
    Paper,
    Typography,
    Button,
    CircularProgress,
} from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { selectUser, useAppSelector } from '../../store';
import { updateConfirm } from '../../api';
import { useState } from 'react';
import { State } from '../../types';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export const ConfirmMessage = () => {
    const user = useAppSelector(selectUser);
    const [state, setState] = useState<State>('idle');

    const handleClick = () => {
        if (!user) {
            return;
        }

        setState('loading');

        updateConfirm(user.id)
            .then((response) => {
                if (response.statusCode === 200) {
                    setState('fulfilled');
                } else {
                    setState('error');
                }
            })
            .catch(() => {
                setState('error');
            });
    };

    let icon = (
        <MailOutlineIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
    );
    let title = 'Подтвердите ваш email';
    let message = `
    Мы отправили письмо с ссылкой для активации вашего аккаунта на вашу
            почту. Пожалуйста, перейдите по ссылке, чтобы завершить регистрацию.

            Если вы не получили письмо, проверьте папку "Спам" или запросите
            повторную отправку письма.
    `;

    if (state === 'fulfilled') {
        icon = (
            <CheckCircleOutlineIcon
                sx={{ fontSize: 60, color: 'success.main', mb: 2 }}
            />
        );
        title = 'Письмо отправлено!';
        message =
            'Новое письмо с ссылкой для активации успешно отправлено на вашу почту.';
    } else if (state === 'error') {
        icon = (
            <ErrorOutlineIcon
                sx={{ fontSize: 60, color: 'error.main', mb: 2 }}
            />
        );
        title = 'Ошибка отправки';
        message =
            'Произошла ошибка при отправке письма. Пожалуйста, попробуйте ещё раз.';
    }

    return (
        <Layout>
            <Box display="flex" alignItems="center" flexDirection="column">
                <Paper
                    elevation={3}
                    sx={{
                        padding: 4,
                        textAlign: 'center',
                        maxWidth: 500,
                        width: '100%',
                        mt: 6,
                    }}
                >
                    {icon}

                    <Typography variant="h4" component="h1" gutterBottom>
                        {title}
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3 }}>
                        {message}
                    </Typography>
                    {state !== 'error' && state !== 'fulfilled' && (
                        <Button
                            variant="contained"
                            color="primary"
                            disabled={state === 'loading'}
                            onClick={handleClick}
                            startIcon={
                                state === 'loading' ? (
                                    <CircularProgress size={20} />
                                ) : null
                            }
                        >
                            Отправить письмо повторно
                        </Button>
                    )}
                </Paper>
            </Box>
        </Layout>
    );
};
