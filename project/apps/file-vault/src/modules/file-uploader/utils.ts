import { ConfigService } from '@nestjs/config';
import { ServeStaticModuleAsyncOptions } from '@nestjs/serve-static/dist/interfaces/serve-static-options.interface';

export const getServeStaticOptions = (): ServeStaticModuleAsyncOptions => ({
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => {
        const rootPath = configService.get('fileVault.uploadDir');
        const serveRoot = configService.get('fileVault.serveRoot');

        return [{ rootPath, serveRoot }];
    },
});
