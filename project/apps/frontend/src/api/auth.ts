import { apiPrefix } from './const';
import { ErrorResponse, SuccessfullyResponse } from './types';
import { User } from '@project/types';

export const baseUrl = API_BASE_URL + apiPrefix;

interface LoginParams {
    mail: string;
    password: string;
}

type LoginResponse = ErrorResponse | SuccessfullyResponse<User>;

export const login = ({
    mail,
    password,
}: LoginParams): Promise<LoginResponse> =>
    fetch(baseUrl + '/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            mail,
            password,
        }),
        credentials: 'include',
    }).then((response) => response.json());

interface SignupParams {
    mail: string;
    password: string;
    firstname: string;
    lastname: string;
}

export const signup = ({ mail, firstname, lastname, password }: SignupParams) =>
    fetch(baseUrl + '/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            mail,
            firstname,
            lastname,
            password,
        }),
        credentials: 'include',
    }).then((response) => response.json());

export const checkAuth = (): Promise<LoginResponse> =>
    fetch(baseUrl + '/check', { method: 'GET', credentials: 'include' }).then(
        (response) => response.json(),
    );
