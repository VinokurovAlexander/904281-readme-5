export interface Category {
    id: string;
    title: string;
}

export interface Like {
    id: string;
    userId: string;
    createdAt: string;
}

export interface Repost {
    id: string;
    userId: string;
    createdAt: string;
    postId: string;
}

export interface Comment {
    id: string;
    text: string;
    createdAt: string;
    userId: string;
}

export interface Post {
    id: string;
    userId: string;
    createdAt: string;
    updatedAt: string;
    title: string;
    content: string;
    category: Category;
    comments: Comment[];
    likes: Like[];
    reposts: Repost[];
}
