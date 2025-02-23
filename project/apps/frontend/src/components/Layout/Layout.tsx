import { ReactNode } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography, Avatar } from '@mui/material';
import { selectUser, useAppSelector } from '../../store';

interface LayoutProps {
    children: ReactNode;
}

const routes = [
    {
        to: '/login',
        text: 'Вход',
    },
    {
        to: '/signup',
        text: 'Регистрация',
    },
];

export const Layout = ({ children }: LayoutProps) => {
    const user = useAppSelector(selectUser);
    const location = useLocation();

    return (
        <>
            <AppBar position="static">
                <Toolbar sx={{ justifyContent: 'flex-end' }}>
                    {!user &&
                        routes.map((route) => (
                            <Button
                                color="inherit"
                                component={NavLink}
                                to={route.to}
                                sx={{ textTransform: 'none', mx: 1 }}
                                disabled={location.pathname === route.to}
                                key={route.to}
                            >
                                {route.text}
                            </Button>
                        ))}
                    {user && (
                        <>
                            <Avatar
                                alt={`${user.firstname} ${user.lastname}`}
                                src={user.photo}
                            />

                            <Typography
                                variant="h6"
                                component="div"
                                sx={{ ml: 2 }}
                            >
                                {`${user.firstname} ${user.lastname}`}
                            </Typography>
                        </>
                    )}
                </Toolbar>
            </AppBar>
            {children}
        </>
    );
};
