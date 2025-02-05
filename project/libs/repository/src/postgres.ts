import { BaseEntity, EntityFactory, StorableEntity } from '@project/types';
import { PrismaClientService } from '@project/prisma';

export abstract class BasePostgresRepository<
    Entity extends BaseEntity & StorableEntity<BaseEntity>,
    Document,
> {
    constructor(
        protected entityFactory: EntityFactory<Entity>,
        protected readonly client: PrismaClientService,
    ) {}

    protected createEntityFromDocument(document: Document) {
        return this.entityFactory.create(document);
    }
}
