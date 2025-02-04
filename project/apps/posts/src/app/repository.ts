import { BasePostgresRepository } from '../../../../libs/repository/src/postgres';
import { Post } from '../types';
import { PostEntity } from './entities';
import { PostFactory } from './factories';
import { PrismaClientService } from '../../../../libs/repository/src/postgres/service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PostRepository extends BasePostgresRepository<PostEntity, Post> {
    constructor(entityFactory: PostFactory, client: PrismaClientService) {
        super(entityFactory, client);
    }

    public async find() {
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
