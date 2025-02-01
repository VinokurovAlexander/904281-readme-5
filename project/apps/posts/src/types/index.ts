interface Category {
    id: string;
    title: string;
}

interface Like {
    id: string;
    userId: string;
    createdAt: string;
}

interface Repost {
    id: string;
    userId: string;
    createdAt: string;
}

interface Comment {
    id: string;
    text: string;
    createdAt: string;
    userId: string;
}

interface Post {
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
