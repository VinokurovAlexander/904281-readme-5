import { MouseEvent, ReactNode, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Button,
    Typography,
    Avatar,
    Menu,
    MenuItem,
} from '@mui/material';
import {
    selectUser,
    useAppDispatch,
    useAppSelector,
    userActions,
} from '../../store';

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
    const dispatch = useAppDispatch();
    const location = useLocation();
    const user = useAppSelector(selectUser);

    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const handleMenuOpen = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        handleMenuClose();
        dispatch(userActions.setUser(null));
    };

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
                        <Button
                            color="inherit"
                            onClick={handleMenuOpen}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                textTransform: 'none',
                                gap: 1,
                            }}
                        >
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
                        </Button>
                    )}

                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                        slotProps={{
                            paper: {
                                style: {
                                    width: anchorEl
                                        ? anchorEl.offsetWidth
                                        : 'auto',
                                },
                            },
                        }}
                    >
                        <MenuItem onClick={handleLogout}>Выйти</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>

            {children}
        </>
    );
};
