import { Expose, Type } from 'class-transformer';
import { Category } from '@project/types';

class LikeRdo {
    @Expose()
    public id: string;

    @Expose()
    public userId: string;

    @Expose()
    public createAt: string;
}

class CommentRdo {
    @Expose()
    public id: string;

    @Expose()
    public text: string;

    @Expose()
    public createdAt: Date;

    @Expose()
    public userId: string;
}

class RepostRdo {
    @Expose()
    public id: string;

    @Expose()
    public postId: string;

    @Expose()
    public createdAt: Date;

    @Expose()
    public userId: string;
}

export class PostRdo {
    @Expose()
    public id: string;

    @Expose()
    public userId: string;

    @Expose()
    public createdAt: Date;

    @Expose()
    public title: string;

    @Expose()
    public content: string;

    @Expose()
    public category: Category;

    @Expose()
    @Type(() => CommentRdo)
    public comments: CommentRdo[];

    @Expose()
    @Type(() => LikeRdo)
    public likes: LikeRdo[];

    @Expose()
    @Type(() => RepostRdo)
    public reposts: RepostRdo[];
}
