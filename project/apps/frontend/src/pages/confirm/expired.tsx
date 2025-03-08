import { Box, Button, Paper, Typography } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export const Expired = () => (
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
            <MailOutlineIcon
                sx={{
                    fontSize: 60,
                    color: 'primary.main',
                    mb: 2,
                }}
            />

            <Typography variant="h4" component="h1" gutterBottom>
                Срок действия ссылки истёк
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
                Ссылка для активации вашего аккаунта больше не действительна.
                Пожалуйста, запросите новую ссылку для завершения регистрации.
            </Typography>

            <Button
                variant="contained"
                color="primary"
                // onClick={onResendEmail}
                disabled
            >
                Отправить письмо повторно
            </Button>
        </Paper>
    </Box>
);
