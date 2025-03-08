import { apiPrefix } from './const';
import { ApiResponse } from './types';

const baseUrl = API_BASE_URL + apiPrefix;

export const confirmUser = (
    userId: string,
    token: string,
): Promise<ApiResponse<null>> =>
    fetch(baseUrl + '/confirmation', {
        method: 'POST',
        body: JSON.stringify({ userId, token }),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((response) => response.json());
