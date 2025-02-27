import { ReactNode, FC, useEffect, useState } from 'react';
import { CircularProgress, Box } from '@mui/material';
import {
    selectUser,
    useAppDispatch,
    useAppSelector,
    userActions,
} from '../../store';
import { checkAuth } from '../../api';
import { useNavigate } from 'react-router-dom';

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
    const dispatch = useAppDispatch();
    const user = useAppSelector(selectUser);
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (user) {
            return;
        }

        setIsLoading(true);
        checkAuth()
            .then((result) => {
                if (result.statusCode === 200) {
                    dispatch(userActions.setUser(result.data));
                    navigate('/');
                } else {
                    navigate('/login');
                }
            })
            .catch(() => {
                navigate('/login');
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [dispatch, navigate, user]);

    if (isLoading) {
        return (
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
            >
                <CircularProgress />
            </Box>
        );
    }

    return children;
};
