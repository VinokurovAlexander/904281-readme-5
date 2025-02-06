import { BasePostgresRepository } from '@project/repository';
import { Post } from '@project/types';
import { PostEntity } from './entities';
import { PostFactory } from './factories';
import { PrismaClientService } from '@project/prisma';
import { Injectable, NotFoundException } from '@nestjs/common';

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

    public async findById(id: string) {
        const document = await this.client.post.findFirst({
            where: { id },
            include: {
                comments: true,
                likes: true,
                reposts: true,
                category: true,
            },
        });

        if (!document) {
            throw new NotFoundException(`post with id ${id} not found`);
        }

        return this.createEntityFromDocument(document);
    }
}
