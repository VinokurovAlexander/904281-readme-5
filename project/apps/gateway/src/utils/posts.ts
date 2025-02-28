import { Post, User } from '@project/types';

export const getUsersIdFromPostComments = (post: Post) => [
    ...new Set(post.comments.map((comment) => comment.userId)),
];

export const mergePostCommentsWithUsers = (post: Post, users: User[]) => {
    const usersMap = new Map(users.map((user) => [user.id, user]));

    return {
        ...post,
        comments: post.comments.map((comment) => ({
            ...comment,
            user: usersMap.get(comment.userId) || null, // Добавляем данные о пользователе
        })),
    };
};
