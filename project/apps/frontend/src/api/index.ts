const apiPrefix = '/api/v1';
const baseUrl = AUTH_API_BASE_URL + apiPrefix;

interface Response {
    statusCode: number;
    message: string;
    error: string;
}

interface LoginParams {
    mail: string;
    password: string;
}

export const login = ({ mail, password }: LoginParams): Promise<Response> =>
    fetch(baseUrl + '/login', {
        method: 'POST',
        body: JSON.stringify({
            mail,
            password,
        }),
    }).then((response) => response.json());
