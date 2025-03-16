import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageCard } from './card-message';
import { IconMessage } from './icon-message';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { CircularProgress, Stack, Typography } from '@mui/material';

const REDIRECT_DELAY = 5000;

export const ActivationSuccessMessage = () => {
    const navigate = useNavigate();
    const [timeLeft, setTimeLeft] = useState(Math.floor(REDIRECT_DELAY / 1000));

    useEffect(() => {
        const timer = setTimeout(() => navigate('/'), REDIRECT_DELAY);
        return () => clearTimeout(timer);
    }, [navigate]);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const handleRedirect = () => navigate('/');

    return (
        <MessageCard
            icon={
                <IconMessage
                    icon={<CheckCircleOutlineIcon />}
                    color="success.main"
                />
            }
            title="Активация успешна!"
            message="Ваш аккаунт успешно активирован. Сейчас вы будете перенаправлены на главную страницу."
            buttonProps={{
                onClick: handleRedirect,
                label: 'Перейти на главную',
            }}
        >
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                spacing={2}
                sx={{ mb: 3 }}
            >
                <CircularProgress size={24} />
                <Typography variant="body2">
                    Перенаправление через: {timeLeft} секунд...
                </Typography>
            </Stack>
        </MessageCard>
    );
};
