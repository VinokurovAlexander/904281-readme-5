import { Button, CircularProgress } from '@mui/material';
import { ReactNode } from 'react';

interface ActionButtonProps {
    loading?: boolean;
    onClick: () => void;
    label: string;
    startIcon?: ReactNode;
}

export const ActionButton = ({
    loading = false,
    onClick,
    label,
    startIcon,
}: ActionButtonProps) => {
    return (
        <Button
            variant="contained"
            color="primary"
            disabled={loading}
            onClick={onClick}
            startIcon={loading ? <CircularProgress size={20} /> : startIcon}
        >
            {label}
        </Button>
    );
};
