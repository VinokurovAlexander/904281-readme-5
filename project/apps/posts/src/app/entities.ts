import { StorableEntity } from '@project/types';
import { Category, Like, Post, Repost, Comment } from '@project/types';
import {
    CategoryFactory,
    CommentFactory,
    LikeFactory,
    RepostFactory,
} from './factories';

export class RepostEntity implements StorableEntity<Repost> {
    id: string;
    userId: string;
    createdAt: Date;
    postId: string;

    constructor(repost: Repost) {
        this.populate(repost);
    }

    populate(repost: Repost) {
        this.id = repost.id;
        this.userId = repost.userId;
        this.createdAt = repost.createdAt;
        this.postId = repost.postId;
    }

    toPOJO(): Repost {
        return {
            id: this.id,
            userId: this.userId,
            createdAt: this.createdAt,
            postId: this.postId,
        };
    }
}

export class LikeEntity implements StorableEntity<Like> {
    id: string;
    userId: string;
    createdAt: Date;

    constructor(like: Like) {
        this.populate(like);
    }

    populate(like: Like) {
        this.id = like.id;
        this.userId = like.userId;
        this.createdAt = like.createdAt;
    }

    toPOJO(): Like {
        return {
            id: this.id,
            userId: this.userId,
            createdAt: this.createdAt,
        };
    }
}

export class CommentEntity implements StorableEntity<Comment> {
    id: string;
    text: string;
    createdAt: Date;
    userId: string;
    postId: string;

    constructor(comment: Comment) {
        this.populate(comment);
    }

    populate(comment: Comment) {
        this.id = comment.id;
        this.text = comment.text;
        this.createdAt = comment.createdAt;
        this.userId = comment.userId;
        this.postId = comment.postId;
    }

    toPOJO(): Comment {
        return {
            id: this.id,
            text: this.text,
            createdAt: this.createdAt,
            userId: this.userId,
            postId: this.postId,
        };
    }
}

export class CategoryEntity implements StorableEntity<Category> {
    id: string;
    title: string;

    constructor(category: Category) {
        this.populate(category);
    }

    populate(category: Category) {
        this.id = category.id;
        this.title = category.title;
    }

    toPOJO(): Category {
        return {
            id: this.id,
            title: this.title,
        };
    }
}

export class PostEntity implements StorableEntity<Post> {
    id: string;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
    title: string;
    content: string;
    category: CategoryEntity;
    comments: CommentEntity[];
    likes: LikeEntity[];
    reposts: RepostEntity[];

    constructor(post: Post) {
        this.populate(post);
    }

    populate(post: Post) {
        const categoryFactory = new CategoryFactory();
        const commentFactory = new CommentFactory();
        const likeFactory = new LikeFactory();
        const repostFactory = new RepostFactory();

        this.id = post.id;
        this.userId = post.userId;
        this.createdAt = post.createdAt;
        this.updatedAt = post.updatedAt;
        this.title = post.title;
        this.content = post.content;
        this.category = categoryFactory.create(post.category);
        this.comments = post.comments.map((comment) =>
            commentFactory.create(comment),
        );
        this.likes = post.likes.map((like) => likeFactory.create(like));
        this.reposts = post.reposts.map((repost) =>
            repostFactory.create(repost),
        );
    }

    toPOJO(): Post {
        return {
            id: this.id,
            title: this.title,
            userId: this.userId,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
            content: this.content,
            category: this.category.toPOJO(),
            comments: this.comments.map((comment) => comment.toPOJO()),
            likes: this.likes.map((like) => like.toPOJO()),
            reposts: this.reposts.map((repost) => repost.toPOJO()),
        };
    }
}
