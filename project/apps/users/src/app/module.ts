import { Module } from '@nestjs/common';

import { AuthModule } from '../modules/auth';
import { ConfigUsersModule } from '../modules/config';
import { MongooseModule } from '@nestjs/mongoose';
import { getMongooseOptions } from '@project/utils';

@Module({
    imports: [
        AuthModule,
        ConfigUsersModule,
        MongooseModule.forRootAsync(getMongooseOptions()),
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
