import { useNavigate } from 'react-router-dom';
import { TextField, Button, Box, Container, Alert } from '@mui/material';
import { FormEvent, useState } from 'react';
import { Layout, Password } from '../../components';
import { snackbarActions, useAppDispatch, userActions } from '../../store';
import { login } from '../../api';

export const Login = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        if (!mail || !password) {
            setError('No name or password');

            return;
        }

        setError(null);

        login({ mail, password })
            .then((result) => {
                if (result.statusCode === 200) {
                    dispatch(userActions.setUser(result.data));
                    dispatch(snackbarActions.setShow(true));
                    navigate('/');
                } else {
                    setError(result.message);
                }
            })
            .catch((e) => setError(e.message));
    };

    return (
        <Layout>
            <Container maxWidth="sm">
                <Box component="form" sx={{ mt: 4 }} onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        label="Почтовый адрес"
                        variant="outlined"
                        margin="normal"
                        type="email"
                        value={mail}
                        onChange={(e) => setMail(e.target.value)}
                        required
                    />
                    <Password value={password} onChange={setPassword} />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Войти
                    </Button>
                    {error && (
                        <Alert severity="error" sx={{ mb: 2 }}>
                            {error}
                        </Alert>
                    )}
                </Box>
            </Container>
        </Layout>
    );
};
