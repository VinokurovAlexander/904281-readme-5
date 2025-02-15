import 'multer';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { fileVaultConfig } from './config';
import { ConfigType } from '@nestjs/config';
import { join } from 'node:path';
import { ensureDir, writeFile } from 'fs-extra';

@Injectable()
export class Service {
    private readonly logger = new Logger(Service.name);

    constructor(
        @Inject(fileVaultConfig)
        private readonly config: ConfigType<typeof fileVaultConfig>,
    ) {}

    private getDestinationFilePath(filename: string) {
        return join(this.getUploadDirectoryPath(), filename);
    }

    private getUploadDirectoryPath(): string {
        return this.config.uploadDir;
    }

    public async saveFile(file: Express.Multer.File): Promise<string> {
        try {
            const uploadDirectoryPath = this.getUploadDirectoryPath();
            const destinationFile = this.getDestinationFilePath(
                file.originalname,
            );

            await ensureDir(uploadDirectoryPath);
            await writeFile(destinationFile, file.buffer);

            return destinationFile;
        } catch (error) {
            this.logger.error(`Error while saving file: ${error.message}`);
            throw new Error(`Can't save file`);
        }
    }
}
