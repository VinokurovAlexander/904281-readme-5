import { apiPrefix } from './const';

const baseUrl = API_BASE_URL + apiPrefix;

interface AddCommentParams {
    text: string;
    userId: string;
    postId: string;
}

export const addComment = (params: AddCommentParams) =>
    fetch(baseUrl + '/add-comment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(params),
    }).then((response) => response.json());
