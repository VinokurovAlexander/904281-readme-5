import { SxProps, Theme } from '@mui/material';
import { ReactElement, cloneElement } from 'react';

interface IconMessageProps {
    icon: ReactElement;
    color?: string;
    size?: number;
    sx?: SxProps<Theme>;
}

export const IconMessage = ({
    icon,
    color = 'primary.main',
    size = 60,
    sx,
}: IconMessageProps) => {
    return cloneElement(icon, {
        sx: { fontSize: size, color, mb: 2, ...sx },
    });
};
