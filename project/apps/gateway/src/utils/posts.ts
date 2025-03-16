import { Post, User } from '@project/types';

export const getUsersIdFromPostComments = (post: Post) => [
    ...new Set(post.comments.map((comment) => comment.userId)),
];

export const getUserIdFromPostAuthor = (posts: Post[]) => [
    ...new Set(posts.map((post) => post.userId)),
];

export const mergePostsWithUsers = (posts: Post[], users: User[]) => {
    const usersMap = new Map(users.map((user) => [user.id, user]));

    return posts.map((post) => {
        const user = usersMap.get(post.userId);

        if (!user) {
            return post;
        }

        return {
            ...post,
            user,
        };
    });
};

export const mergePostCommentsWithUsers = (post: Post, users: User[]) => {
    const usersMap = new Map(users.map((user) => [user.id, user]));

    return {
        ...post,
        comments: post.comments.map((comment) => {
            const user = usersMap.get(comment.userId);

            if (!user) {
                return comment;
            }

            return {
                ...comment,
                user,
            };
        }),
    };
};
