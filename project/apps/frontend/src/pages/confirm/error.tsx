import { Box, Paper, Typography } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutlined';

export const Error = () => (
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
            <ErrorOutlineIcon
                sx={{
                    fontSize: 60,
                    color: 'error.main',
                    mb: 2,
                }}
            />

            <Typography variant="h4" component="h1" gutterBottom>
                Ошибка сервера
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
                Произошла непредвиденная ошибка на сервере. Пожалуйста,
                попробуйте ещё раз позже.
            </Typography>
        </Paper>
    </Box>
);
