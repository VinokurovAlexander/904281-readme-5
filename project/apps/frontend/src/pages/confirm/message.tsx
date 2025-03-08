import { Layout } from '../../components';
import { Box, Paper, Typography, Button } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export const ConfirmMessage = () => {
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
                    <MailOutlineIcon
                        sx={{
                            fontSize: 60,
                            color: 'primary.main',
                            mb: 2,
                        }}
                    />

                    <Typography variant="h4" component="h1" gutterBottom>
                        Подтвердите ваш email
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3 }}>
                        Мы отправили письмо с ссылкой для активации вашего
                        аккаунта на вашу почту. Пожалуйста, перейдите по ссылке,
                        чтобы завершить регистрацию.
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 3 }}>
                        Если вы не получили письмо, проверьте папку "Спам" или
                        запросите повторную отправку письма.
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        // component={Link}
                        // to="/resend-email"
                        disabled
                    >
                        Отправить письмо повторно
                    </Button>
                </Paper>
            </Box>
        </Layout>
    );
};
