import { Document as BaseDocument, Model } from 'mongoose';
import { Repository } from './repository.interface';
import { EntityFactory, StorableEntity } from '@project/types';
import { NotFoundException } from '@nestjs/common';

export abstract class MongoRepository<
    Entity extends StorableEntity<Entity>,
    Document extends BaseDocument<Entity['id']>,
> implements Repository<Entity>
{
    constructor(
        protected entity: EntityFactory<Entity>,
        protected readonly model: Model<Document>,
    ) {}

    protected createEntityFromDocument(
        document: Document | null,
    ): Entity | null {
        if (!document) {
            return null;
        }

        const plainObject = document.toObject({ versionKey: false });

        return this.entity.create(plainObject);
    }

    public async findById(id: Entity['id']): Promise<Entity | null> {
        const document = await this.model.findById(id).exec();

        return this.createEntityFromDocument(document);
    }

    public async save(entity: Entity): Promise<void> {
        const newEntity = new this.model(entity.toPOJO());
        await newEntity.save();

        entity.id = newEntity._id.toString();
    }

    public async update(entity: Entity): Promise<void> {
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
    }

    public async deleteById(id: Entity['id']): Promise<void> {
        const deletedDocument = await this.model.findByIdAndDelete(id).exec();

        if (!deletedDocument) {
            throw new NotFoundException(`Entity with id ${id} not found.`);
        }
    }
}