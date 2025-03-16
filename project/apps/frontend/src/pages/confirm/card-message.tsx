import { Box, Paper, Typography } from '@mui/material';
import { ReactNode, FC } from 'react';
import { ActionButton } from './action-button';

interface MessageCardProps {
    icon: ReactNode;
    title: string;
    message: string;
    buttonProps?: {
        loading?: boolean;
        onClick: () => void;
        label: string;
    };
    children?: ReactNode;
}

export const MessageCard = ({
    icon,
    title,
    message,
    buttonProps,
    children,
}: MessageCardProps) => {
    return (
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
                {icon}
                <Typography variant="h4" component="h1" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                    {message}
                </Typography>
                {children}
                {buttonProps && (
                    <ActionButton
                        loading={buttonProps.loading}
                        onClick={buttonProps.onClick}
                        label={buttonProps.label}
                    />
                )}
            </Paper>
        </Box>
    );
};
