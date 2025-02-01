const apiPrefix = '/api/v1';
const baseUrl = AUTH_API_BASE_URL + apiPrefix;

interface Response {
    statusCode: number;
    message: string;
    error: string;
}

export const login = (): Promise<Response> =>
    fetch(baseUrl + '/login', {
        method: 'POST',
        body: JSON.stringify({
            mail: 'user@notfound.local',
            password: '123456',
        }),
    }).then((response) => response.json());
