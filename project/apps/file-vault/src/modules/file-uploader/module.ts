import { Module } from '@nestjs/common';
import { mongoConfig } from '@project/config';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { fileVaultConfig } from './config';
import { FileUploaderController } from './controller';
import { FileUploaderService } from './service';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
    imports: [
        ConfigModule.forRoot({
            cache: true,
            load: [mongoConfig, fileVaultConfig],
            isGlobal: true,
        }),
        ServeStaticModule.forRootAsync({
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => {
                const rootPath = configService.get('fileVault.uploadDir');
                const serveRoot = configService.get('fileVault.serveRoot');

                return [{ rootPath, serveRoot }];
            },
        }),
    ],
    controllers: [FileUploaderController],
    providers: [FileUploaderService],
})
export class FileUploaderModule {}
