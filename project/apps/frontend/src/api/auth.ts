import { apiPrefix } from './const';
import { ErrorResponse, SuccessfullyResponse } from './types';
import { BaseUser } from '@project/types';

export const baseUrl = AUTH_API_BASE_URL + apiPrefix;

interface LoginParams {
    mail: string;
    password: string;
}

type LoginResponse = ErrorResponse | SuccessfullyResponse<BaseUser>;

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
    }).then((response) => response.json());
