import { Repository } from '../repository.interface';
import { BaseEntity, EntityFactory, StorableEntity } from '@project/types';
import { PrismaClientService } from './service';

const throwNotImplementedError = (methodName: string) => {
    throw new Error(
        `method '${methodName}' not implemented in BasePostgresRepository`,
    );
};

export abstract class BasePostgresRepository<
    Entity extends BaseEntity & StorableEntity,
    Document,
> implements Repository<Entity>
{
    constructor(
        protected entity: EntityFactory<Entity>,
        protected readonly client: PrismaClientService,
    ) {}

    protected createEntityFromDocument(document: Document) {
        return this.entity.create(document);
    }

    public async findById(id: Entity['id']) {
        throwNotImplementedError('findById');
    }

    public async save(entity: Entity) {
        throwNotImplementedError('save');
    }

    public async update(entity: Entity) {
        throwNotImplementedError('update');
    }

    public async deleteById(id: Entity['id']) {
        throwNotImplementedError('deleteById');
    }
}
