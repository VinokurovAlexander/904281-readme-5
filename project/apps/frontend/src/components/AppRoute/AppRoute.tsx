import { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { Box, CircularProgress } from '@mui/material';
import { useAuth } from './hooks';

interface AppRouteProps {
    isProtected?: boolean;
    children: ReactNode;
}

export const AppRoute: FC<AppRouteProps> = ({
    children,
    isProtected = false,
}) => {
    const { user, state } = useAuth();

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
        if (isProtected && !user) {
            return <Navigate to="/login" replace />;
        }

        if (!isProtected && user) {
            return <Navigate to="/" replace />;
        }

        return children;
    }

    return null;
};
