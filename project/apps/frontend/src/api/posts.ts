import { apiPrefix } from './const';
import { Post } from '@project/types';
import { ErrorResponse, SuccessfullyResponse } from './types';

export const baseUrl = API_BASE_URL + apiPrefix + '/posts';

export const getPosts = () =>
    fetch(baseUrl, { method: 'GET' }).then((response) => response.json());

type GetPostResponse = ErrorResponse | SuccessfullyResponse<Post>;
export const getPostById = (id: string): Promise<GetPostResponse> =>
    fetch(baseUrl + `/${id}`, { method: 'GET' }).then((response) =>
        response.json(),
    );
