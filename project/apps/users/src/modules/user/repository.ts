import { MongoRepository } from '@project/repository';
import { User } from './user.entity';
import { Injectable } from '@nestjs/common';
import { UserModel } from './model';
import { UserFactory } from './factory';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersRepository extends MongoRepository<User, UserModel> {
    constructor(
        entityFactory: UserFactory,
        @InjectModel(UserModel.name) model: Model<UserModel>,
    ) {
        super(entityFactory, model);
    }

    public async findByMail(mail: string) {
        const document = await this.model.findOne({ mail }).exec();

        return this.createEntityFromDocument(document);
    }
}
