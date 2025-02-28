import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UsersRepository } from './repository';
import { UserModel, UserSchema } from './model';
import { UserFactory } from './factory';
import { UsersService } from './service';
import { UsersController } from './controller';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: UserModel.name, schema: UserSchema },
        ]),
    ],
    providers: [UsersRepository, UserFactory, UsersService],
    exports: [UsersRepository],
    controllers: [UsersController],
})
export class UserModule {}
