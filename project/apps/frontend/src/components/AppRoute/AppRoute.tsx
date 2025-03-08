import { FC, ReactNode } from 'react';
import { Navigate, useMatch } from 'react-router-dom';
import { Box, CircularProgress } from '@mui/material';
import { useAuth } from './hooks';
import { ConfirmMessage } from '../../pages';

interface AppRouteProps {
    isProtected?: boolean;
    children: ReactNode;
}

export const AppRoute: FC<AppRouteProps> = ({
    children,
    isProtected = false,
}) => {
    const { user, state } = useAuth();

    const isConfirmPage = useMatch('/confirm/:id');
    const isUserAuthenticated = !!user;
    const isUserConfirmed = user?.isConfirmed;

    if (state === 'loading') {
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

    if (state === 'fulfilled') {
        if (isProtected && !isUserAuthenticated) {
            return <Navigate to="/login" replace />;
        }

        if (!isProtected && isUserAuthenticated) {
            return <Navigate to="/" replace />;
        }

        if (isConfirmPage && isUserConfirmed) {
            return <Navigate to="/" replace />;
        }

        if (isUserAuthenticated && !isUserConfirmed && !isConfirmPage) {
            return <ConfirmMessage />;
        }

        return children;
    }

    return null;
};
