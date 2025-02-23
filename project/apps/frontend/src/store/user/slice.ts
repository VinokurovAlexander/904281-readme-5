import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BaseUser } from '@project/types';

interface UserState {
    data: BaseUser | null;
}

const initialState: UserState = {
    data: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<BaseUser | null>) => {
            state.data = action.payload;
        },
    },
});

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;
