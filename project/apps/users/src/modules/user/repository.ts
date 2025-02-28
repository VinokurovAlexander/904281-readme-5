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

    public async findByMail(mail: string): Promise<User | null> {
        const document = await this.model.findOne({ mail }).exec();

        if (!document) {
            return null;
        }

        return this.createEntityFromDocument(document);
    }

    public async findManyById(ids: string[]) {
        const document = await this.model.find({ _id: { $in: ids } });

        return document.map(this.createEntityFromDocument);
    }
}
