import { Module } from '@nestjs/common';
import { UsersRepository } from './repository';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModel, UserSchema } from './model';
import { UserFactory } from './factory';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: UserModel.name, schema: UserSchema },
        ]),
    ],
    providers: [UsersRepository, UserFactory],
    exports: [UsersRepository],
})
export class UserModule {}
