import { FormEvent, useState } from 'react';
import { signup } from '../../api';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, userActions } from '../../store';
import { Alert, Box, Button, Container, TextField } from '@mui/material';
import { Layout, Password } from '../../components';

export const Signup = () => {
    const [mail, setMail] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [firstPassword, setFirstPassword] = useState('');
    const [secondPassword, setSecondPassword] = useState('');

    const [error, setError] = useState<string | string[] | null>(null);

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        setError(null);

        if (
            !mail ||
            !firstname ||
            !lastname ||
            !firstPassword ||
            !secondPassword
        ) {
            setError('Не все поля заполнены');
            return;
        }

        if (firstPassword !== secondPassword) {
            setError('Пароли не совпадают');
            return;
        }

        signup({ mail, firstname, lastname, password: firstPassword })
            .then((result) => {
                if (result.statusCode === 200) {
                    dispatch(userActions.setUser(result.data));
                    navigate('/popular');
                } else {
                    setError(result.message);
                }
            })
            .catch(() => setError('Что-то пошло не так'));
    };

    return (
        <Layout>
            <Container maxWidth="sm">
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
                    {error &&
                        (typeof error === 'string' ? (
                            <Alert severity="error" sx={{ mb: 2 }}>
                                {error}
                            </Alert>
                        ) : (
                            error.map((item) => (
                                <Alert severity="error" sx={{ mb: 2 }}>
                                    {item}
                                </Alert>
                            ))
                        ))}

                    <TextField
                        fullWidth
                        label="Имя"
                        variant="outlined"
                        margin="normal"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                        required
                    />

                    <TextField
                        fullWidth
                        label="Фамилия"
                        variant="outlined"
                        margin="normal"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                        required
                    />

                    <TextField
                        fullWidth
                        label="Email"
                        variant="outlined"
                        margin="normal"
                        type="email"
                        value={mail}
                        onChange={(e) => setMail(e.target.value)}
                        required
                    />

                    <Password
                        value={firstPassword}
                        onChange={setFirstPassword}
                    />

                    <Password
                        label="Подтвердите пароль"
                        value={secondPassword}
                        onChange={setSecondPassword}
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Зарегистрироваться
                    </Button>
                </Box>
            </Container>
        </Layout>
    );
};
