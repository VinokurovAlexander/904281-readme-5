import { apiPrefix } from './const';
import { ApiResponse } from './types';
import { User } from '@project/types';

const baseUrl = API_BASE_URL + apiPrefix + '/confirmation';

type FetchOptions = { signal?: AbortSignal };

export const confirmUser = (
    userId: string,
    token: string,
    options?: FetchOptions,
): Promise<ApiResponse<User>> =>
    fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify({ userId, token }),
        headers: {
            'Content-Type': 'application/json',
        },
        signal: options?.signal,
    }).then((response) => response.json());

export const updateConfirm = (userId: string): Promise<ApiResponse<User>> =>
    fetch(baseUrl + '/update', {
        method: 'POST',
        body: JSON.stringify({ userId }),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((response) => response.json());
