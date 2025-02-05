import { apiPrefix } from './const';

export const baseUrl = AUTH_API_BASE_URL + apiPrefix;

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
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            mail,
            password,
        }),
    }).then((response) => response.json());

interface SignupParams {
    mail: string;
    password: string;
    login: string;
}

export const signup = ({ mail, login, password }: SignupParams) =>
    fetch(baseUrl + '/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            mail,
            login,
            password,
            photo: 'some-url',
        }),
    }).then((response) => response.json());
