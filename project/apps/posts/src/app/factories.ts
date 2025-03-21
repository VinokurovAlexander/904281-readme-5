import { EntityFactory } from '@project/types';
import {
    CategoryEntity,
    CommentEntity,
    LikeEntity,
    PostEntity,
    RepostEntity,
} from './entities';
import { Category, Comment, Repost, Like, Post } from '@project/types';

export class CategoryFactory implements EntityFactory<CategoryEntity> {
    public create(entityPlainData: Category): CategoryEntity {
        return new CategoryEntity(entityPlainData);
    }
}

export class CommentFactory implements EntityFactory<CommentEntity> {
    public create(entityPlainData: Comment): CommentEntity {
        return new CommentEntity(entityPlainData);
    }
}

export class RepostFactory implements EntityFactory<RepostEntity> {
    public create(entityPlainData: Repost): RepostEntity {
        return new RepostEntity(entityPlainData);
    }
}

export class LikeFactory implements EntityFactory<LikeEntity> {
    public create(entityPlainData: Like): LikeEntity {
        return new LikeEntity(entityPlainData);
    }
}

export class PostFactory implements EntityFactory<PostEntity> {
    public create(entityPlainData: Post): PostEntity {
        return new PostEntity(entityPlainData);
    }
}
