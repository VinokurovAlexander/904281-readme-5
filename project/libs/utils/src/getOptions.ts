import { MongooseModuleAsyncOptions } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';
import { getMongoConnectionString } from './getMongoConnectionString';

export const getMongooseOptions = (): MongooseModuleAsyncOptions => ({
    useFactory: async (config: ConfigService) => {
        const username = config.getOrThrow<string>('db.user');
        const password = config.getOrThrow<string>('db.password');
        const host = config.getOrThrow<string>('db.host');
        const port = config.getOrThrow<number>('db.port');
        const authDatabase = config.getOrThrow<string>('db.authBase');
        const databaseName = config.getOrThrow<string>('db.name');

        const mongoUri = getMongoConnectionString({
            username,
            password,
            host,
            port,
            authDatabase,
            databaseName,
        });

        return {
            uri: mongoUri,
        };
    },
    inject: [ConfigService],
});
