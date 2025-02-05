import {
    Category,
    Comment,
    Like,
    Repost,
} from '../../../../apps/posts/src/types';

export interface Post {
    id: string;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
    title: string;
    content: string;
    category: Category;
    comments: Comment[];
    likes: Like[];
    reposts: Repost[];
}
