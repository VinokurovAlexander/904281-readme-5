import { RootState } from '../types';

export const selectIsUser = (state: RootState) => state.user.data;
