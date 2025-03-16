import { MongoRepository } from '@project/repository';
import { ConfirmationModel } from './model';
import { ConfirmationEntity } from './entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ConfirmationFactory } from './factory';
import { Injectable } from '@nestjs/common';

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
        return await this.model.findOne({ userId }).exec();
    }
}
