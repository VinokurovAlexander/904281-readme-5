import {
    Alert,
    Typography,
    Snackbar as SnackbarUI,
    Slide,
} from '@mui/material';
import { SlideProps } from '@mui/material/Slide/Slide';
import {
    selectIsShowSnackbar,
    selectUser,
    snackbarActions,
    useAppDispatch,
    useAppSelector,
} from '../../store';
import { memo } from 'react';

function SlideTransition(props: SlideProps) {
    return <Slide {...props} direction="up" />;
}

export const Snackbar = memo(() => {
    const dispatch = useAppDispatch();
    const isShowSnackbar = useAppSelector(selectIsShowSnackbar);
    const user = useAppSelector(selectUser);

    const handleSnackbarClose = () => {
        dispatch(snackbarActions.setShow(false));
    };

    return (
        <SnackbarUI
            open={isShowSnackbar}
            autoHideDuration={6000}
            onClose={handleSnackbarClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            TransitionComponent={SlideTransition}
        >
            <Alert
                onClose={handleSnackbarClose}
                severity="success"
                variant="filled"
                sx={{ width: '100%' }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                    }}
                >
                    <Typography>
                        {`${user?.firstname} ${user?.lastname}, вы успешно авторизовались!`}
                    </Typography>
                </div>
            </Alert>
        </SnackbarUI>
    );
});
