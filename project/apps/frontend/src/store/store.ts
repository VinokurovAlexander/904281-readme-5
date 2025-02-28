import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './user';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './types';
import { snackbarReducer } from './snackbar';

export const store = configureStore({
    reducer: {
        user: userReducer,
        snackbar: snackbarReducer,
    },
});

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
