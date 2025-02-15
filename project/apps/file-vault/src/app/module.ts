import { Module } from '@nestjs/common';

import { fileVaultConfig } from './config';
import { ConfigModule } from '@nestjs/config';
import { mongoConfig } from '@project/config';
import { FileUploaderController } from './controller';
import { FileUploaderService } from './service';

@Module({
    imports: [
        ConfigModule.forRoot({
            cache: true,
            load: [mongoConfig, fileVaultConfig],
        }),
    ],
    controllers: [FileUploaderController],
    providers: [FileUploaderService],
})
export class FileVaultModule {}
