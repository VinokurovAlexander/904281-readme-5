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
}
