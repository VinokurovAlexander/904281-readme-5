import { apiPrefix } from './const';
import { Post } from '@project/types';

export const baseUrl = POSTS_API_BASE_URL + apiPrefix + '/posts';

interface SuccessfullyResponse<T> {
    statusCode: 200;
    data: T;
}

export const getPosts = () =>
    fetch(baseUrl, { method: 'GET' }).then((response) => response.json());

export const getPostById = (id: string): Promise<SuccessfullyResponse<Post>> =>
    fetch(baseUrl + `/${id}`, { method: 'GET' }).then((response) =>
        response.json(),
    );
