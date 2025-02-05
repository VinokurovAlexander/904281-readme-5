import { BasePostgresRepository } from '@project/repository';
import { Post } from '../types';
import { PostEntity } from './entities';
import { PostFactory } from './factories';
import { PrismaClientService } from '@project/prisma';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PostRepository extends BasePostgresRepository<PostEntity, Post> {
    constructor(entityFactory: PostFactory, client: PrismaClientService) {
        super(entityFactory, client);
    }

    public async find(): Promise<PostEntity[]> {
        const documents = await this.client.post.findMany({
            include: {
                comments: true,
                likes: true,
                reposts: true,
                category: true,
            },
        });

        return documents.map((document) =>
            this.createEntityFromDocument(document),
        );
    }
}
