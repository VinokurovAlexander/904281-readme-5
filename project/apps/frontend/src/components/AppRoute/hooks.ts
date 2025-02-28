import { useEffect, useState } from 'react';
import { checkAuth } from '../../api';
import {
    selectUser,
    useAppDispatch,
    useAppSelector,
    userActions,
} from '../../store';

type State = 'idle' | 'fulfilled' | 'loading' | 'error';

export const useAuth = () => {
    const user = useAppSelector(selectUser);
    const dispatch = useAppDispatch();

    const [state, setState] = useState<State>('idle');

    useEffect(() => {
        if (user) {
            return;
        }

        setState('loading');

        checkAuth()
            .then((result) => {
                if (result.statusCode === 200) {
                    dispatch(userActions.setUser(result.data));
                }

                setState('fulfilled');
            })
            .catch(() => {
                setState('error');
            });
    }, [dispatch, user]);

    return { state, user };
};
