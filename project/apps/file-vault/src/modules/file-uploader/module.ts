import { Module } from '@nestjs/common';
import { mongoConfig } from '@project/config';
import { ConfigModule } from '@nestjs/config';

import { fileVaultConfig } from './config';
import { FileUploaderController } from './controller';
import { FileUploaderService } from './service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { getServeStaticOptions } from './utils';
import { MongooseModule } from '@nestjs/mongoose';
import { FileModel, FileSchema } from './model';
import { FileUploaderRepository } from './repository';
import { FileUploaderFactory } from './factory';

@Module({
    imports: [
        ConfigModule.forRoot({
            cache: true,
            load: [mongoConfig, fileVaultConfig],
            isGlobal: true,
        }),
        ServeStaticModule.forRootAsync(getServeStaticOptions()),
        MongooseModule.forFeature([
            { name: FileModel.name, schema: FileSchema },
        ]),
    ],
    providers: [
        FileUploaderService,
        FileUploaderRepository,
        FileUploaderFactory,
    ],
    controllers: [FileUploaderController],
})
export class FileUploaderModule {}
