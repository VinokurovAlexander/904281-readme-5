import { Module } from '@nestjs/common';
import { mongoConfig } from '@project/config';
import { ConfigModule } from '@nestjs/config';

import { fileVaultConfig } from './config';
import { FileUploaderController } from './controller';
import { FileUploaderService } from './service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { getServeStaticOptions } from './utils';

@Module({
    imports: [
        ConfigModule.forRoot({
            cache: true,
            load: [mongoConfig, fileVaultConfig],
            isGlobal: true,
        }),
        ServeStaticModule.forRootAsync(getServeStaticOptions()),
    ],
    controllers: [FileUploaderController],
    providers: [FileUploaderService],
})
export class FileUploaderModule {}
