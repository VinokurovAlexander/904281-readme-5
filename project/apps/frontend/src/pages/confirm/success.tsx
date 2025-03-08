import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Paper,
    Typography,
    Button,
    CircularProgress,
    Stack,
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const REDIRECT_RELAY = 5000;

export const ActivationSuccessMessage = () => {
    const navigate = useNavigate();
    const [timeLeft, setTimeLeft] = useState(Math.floor(REDIRECT_RELAY / 1000)); // Оставшееся время в секундах

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/');
        }, REDIRECT_RELAY);

        return () => clearTimeout(timer);
    }, [navigate]);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const handleRedirect = () => {
        navigate('/');
    };

    return (
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
                <CheckCircleOutlineIcon
                    sx={{
                        fontSize: 60,
                        color: 'success.main',
                        mb: 2,
                    }}
                />
                <Typography variant="h4" component="h1" gutterBottom>
                    Активация успешна!
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                    Ваш аккаунт успешно активирован. Сейчас вы будете
                    перенаправлены на главную страницу.
                </Typography>
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
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleRedirect}
                >
                    Перейти на главную
                </Button>
            </Paper>
        </Box>
    );
};
