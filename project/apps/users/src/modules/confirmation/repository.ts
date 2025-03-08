import { MongoRepository } from '@project/repository';
import { ConfirmationModel } from './model';
import { ConfirmationEntity } from './entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ConfirmationFactory } from './factory';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ConfirmationRepository extends MongoRepository<
    ConfirmationEntity,
    ConfirmationModel
> {
    constructor(
        entityFactory: ConfirmationFactory,
        @InjectModel(ConfirmationModel.name) model: Model<ConfirmationModel>,
    ) {
        super(entityFactory, model);
    }

    public async findTokenByUserId(userId: string) {
        const document = await this.model.findOne({ userId }).exec();

        if (!document) {
            throw new NotFoundException(
                `Confirm token for user with id ${userId} not found`,
            );
        }

        return document;
    }
}
