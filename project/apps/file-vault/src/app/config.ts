import { registerAs } from '@nestjs/config';
import { plainToClass } from 'class-transformer';
import {
    IsString,
    validateOrReject,
} from 'class-validator';

class FileVaultConfig {
    @IsString({ message: 'Upload directory is required' })
    public uploadDir: string;

    @IsString({ message: 'Serve root path is required' })
    public serveRoot: string;

    public async validate() {
        try {
            await validateOrReject(this);
        } catch (err) {
            console.log('Validate file vault config error', err);
            throw err;
        }
    }
}

const getFileVaultConfig = async () => {
    const config = plainToClass(FileVaultConfig, {
        uploadDir: process.env.UPLOAD_DIRECTORY_PATH,
        serveRoot: process.env.SERVE_ROOT,
    });

    await config.validate();

    return config;
};

export const fileVaultConfig = registerAs('fileVault', () =>
    getFileVaultConfig(),
);
