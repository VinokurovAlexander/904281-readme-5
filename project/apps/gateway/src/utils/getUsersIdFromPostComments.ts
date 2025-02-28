import { Post } from '@project/types';

export const getUsersIdFromPostComments = (posts: Post[]) => [
    ...new Set(posts.map((comment) => comment.userId)),
];
