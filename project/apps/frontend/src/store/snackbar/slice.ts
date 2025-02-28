import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SnackbarState {
    show: boolean;
}

const initialState: SnackbarState = {
    show: false,
};

const snackbarSlice = createSlice({
    name: 'snackbar',
    initialState,
    reducers: {
        setShow: (state, action: PayloadAction<boolean>) => {
            state.show = action.payload;
        },
    },
});

export const snackbarReducer = snackbarSlice.reducer;
export const snackbarActions = snackbarSlice.actions;
