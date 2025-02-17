import { Inject, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { join } from 'node:path';
import { ensureDir, writeFile } from 'fs-extra';
import dayjs from 'dayjs';
import { randomUUID } from 'node:crypto';
import { extension } from 'mime-types';

import { fileVaultConfig } from './config';
import { FileUploaderRepository } from './repository';
import { FileEntity } from './entity';

@Injectable()
export class FileUploaderService {
    private readonly logger = new Logger(FileUploaderService.name);

    constructor(
        @Inject(fileVaultConfig.KEY)
        private readonly config: ConfigType<typeof fileVaultConfig>,
        private readonly fileRepository: FileUploaderRepository,
    ) {}

    private getSubUploadDirectoryPath(): string {
        const [year, month] = dayjs().format('YYYY MM').split(' ');

        return join(year, month);
    }

    private getUploadDirectoryPath(): string {
        return this.config.uploadDir;
    }

    private getDestinationFilePath(filename: string): string {
        return join(
            this.getUploadDirectoryPath(),
            this.getSubUploadDirectoryPath(),
            filename,
        );
    }

    private async writeFile(file: Express.Multer.File) {
        try {
            const uploadDirectoryPath = this.getUploadDirectoryPath();
            const subDirectory = this.getSubUploadDirectoryPath();
            const fileExtension = extension(file.mimetype);
            const filename = `${randomUUID()}.${fileExtension}`;

            const path = this.getDestinationFilePath(filename);

            this.logger.log(`path is ${path}`);

            await ensureDir(join(uploadDirectoryPath, subDirectory));
            await writeFile(path, file.buffer);

            return { fileExtension, filename, path, subDirectory };
        } catch (error) {
            this.logger.error(`Error while saving file: ${error.message}`);
            throw new Error(`Can't save file`);
        }
    }

    public async saveFile(file: Express.Multer.File) {
        const storedFileInfo = await this.writeFile(file);

        const fileEntity = new FileEntity({
            hashName: storedFileInfo.filename,
            mimetype: file.mimetype,
            originalName: file.originalname,
            path: storedFileInfo.path,
            size: file.size,
            subDirectory: storedFileInfo.subDirectory,
        });

        return await this.fileRepository.saveEntityWithoutId(fileEntity);
    }

    public async getFile(id: string) {
        return await this.fileRepository.findById(id);
    }
}
