import { BaseUser, User } from './user';

export interface Category {
    id: string;
    title: string;
}

export interface Like {
    id: string;
    userId: string;
    createdAt: Date;
}

export interface Repost {
    id: string;
    userId: string;
    createdAt: Date;
    postId: string;
}

export interface Comment {
    id: string;
    text: string;
    createdAt: Date;
    userId: string;
    postId: string;
}

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

export interface PostWithUser extends Post {
    user: User;
}
