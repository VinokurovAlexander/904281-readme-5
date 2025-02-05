import { apiPrefix } from './const';

export const baseUrl = POSTS_API_BASE_URL + apiPrefix;

export const getPosts = () =>
    fetch(baseUrl + '/posts', { method: 'GET' }).then((response) =>
        response.json(),
    );
