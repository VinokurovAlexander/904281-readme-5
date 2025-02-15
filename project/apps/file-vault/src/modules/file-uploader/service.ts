import { Inject, Injectable, Logger } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { join } from 'node:path';
import { ensureDir, writeFile } from 'fs-extra';
import dayjs from 'dayjs';
import { randomUUID } from 'node:crypto';
import { extension } from 'mime-types';

import { fileVaultConfig } from './config';
import { logger } from 'nx/src/utils/logger';

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
            const filename = randomUUID();

            logger.log('mimetype is', file.mimetype);

            const fileExtension = extension(file.mimetype);

            const destinationFile = this.getDestinationFilePath(
                `${filename}.${fileExtension}`,
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
