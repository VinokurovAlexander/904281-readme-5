import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { fileVaultConfig } from './config';
import { ConfigModule } from '@nestjs/config';
import { mongoConfig } from '../../../users/src/lib/mongo';

@Module({
    imports: [
        ConfigModule.forRoot({
            cache: true,
            load: [mongoConfig, fileVaultConfig],
        }),
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
