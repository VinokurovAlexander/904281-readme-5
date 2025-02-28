import { RootState } from '../types';

export const selectIsShowSnackbar = (state: RootState) => state.snackbar.show;
