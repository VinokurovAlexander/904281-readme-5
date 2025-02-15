import { Inject, Injectable, Logger } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { join } from 'node:path';
import { ensureDir, writeFile } from 'fs-extra';
import dayjs from 'dayjs';

import { fileVaultConfig } from './config';

@Injectable()
export class FileUploaderService {
    private readonly logger = new Logger(FileUploaderService.name);

    constructor(
        @Inject(fileVaultConfig.KEY)
        private readonly config: ConfigType<typeof fileVaultConfig>,
    ) {}

    private getDestinationFilePath(filename: string) {
        return join(this.getUploadDirectoryPath(), filename);
    }

    private getUploadDirectoryPath(): string {
        const [year, month] = dayjs().format('YYYY MM').split(' ');

        return join(this.config.uploadDir, year, month);
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
