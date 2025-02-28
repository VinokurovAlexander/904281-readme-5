import { BasePostgresRepository } from '@project/repository';
import { CommentEntity } from '../../app/entities';
import { CommentFactory } from '../../app/factories';
import { PrismaClientService } from '@project/prisma';
import { CreateCommentDto } from './dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CommentsRepository extends BasePostgresRepository<
    CommentEntity,
    Comment
> {
    constructor(entityFactory: CommentFactory, client: PrismaClientService) {
        super(entityFactory, client);
    }

    public async add(data: CreateCommentDto): Promise<CommentEntity> {
        const record = await this.client.comment.create({
            data,
        });

        return this.entityFactory.create(record);
    }
}
