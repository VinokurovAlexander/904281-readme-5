import { Document as BaseDocument, Model } from 'mongoose';
import { Repository } from './repository.interface';
import { BaseEntity, EntityFactory, StorableEntity } from '@project/types';
import { NotFoundException } from '@nestjs/common';

export abstract class MongoRepository<
    Entity extends BaseEntity & StorableEntity<BaseEntity>,
    Document extends BaseDocument<Entity['id']>,
> implements Repository<Entity>
{
    constructor(
        protected entityFactory: EntityFactory<Entity>,
        protected readonly model: Model<Document>,
    ) {}

    protected createEntityFromDocument(document: Document): Entity {
        const plainObject = document.toObject({ versionKey: false });

        return this.entityFactory.create(plainObject);
    }

    public async findById(id: Entity['id']): Promise<Entity> {
        const document = await this.model.findById(id).exec();

        if (!document) {
            throw new NotFoundException(`Item with ${id} not found`);
        }

        return this.createEntityFromDocument(document);
    }

    public async save(entity: Entity) {
        const newEntity = new this.model(entity.toPOJO());
        await newEntity.save();

        entity.id = newEntity._id.toString();

        return entity;
    }

    public async saveEntityWithoutId(entity: StorableEntity): Promise<Entity> {
        const newEntity = new this.model(entity.toPOJO());
        const document = await newEntity.save();

        return this.createEntityFromDocument(document as Document);
    }

    public async update(entity: Entity) {
        const updatedDocument = await this.model
            .findByIdAndUpdate(entity.id, entity.toPOJO(), {
                new: true,
                runValidators: true,
            })
            .exec();

        if (!updatedDocument) {
            throw new NotFoundException(
                `Entity with id ${entity.id} not found`,
            );
        }

        return entity;
    }

    public async deleteById(id: Entity['id']): Promise<void> {
        const deletedDocument = await this.model.findByIdAndDelete(id).exec();

        if (!deletedDocument) {
            throw new NotFoundException(`Entity with id ${id} not found.`);
        }
    }
}
