import { Module } from '@nestjs/common';
import { UsersRepository } from './repository';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModel, UserSchema } from './model';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: UserModel.name, schema: UserSchema },
        ]),
    ],
    providers: [UsersRepository],
    exports: [UsersRepository],
})
export class UserModule {}
