import { MongooseModuleAsyncOptions } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';
import { getMongoConnectionString } from './getMongoConnectionString';

export const getMongooseOptions = (): MongooseModuleAsyncOptions => ({
    useFactory: async (config: ConfigService) => {
        const username = config.get<string>('db.user');
        const password = config.get<string>('db.password');
        const host = config.get<string>('db.host');
        const port = config.get<number>('db.port');
        const authDatabase = config.get<string>('db.authBase');
        const databaseName = config.get<string>('db.name');

        if (
            !username ||
            !password ||
            !host ||
            !port ||
            !authDatabase ||
            !databaseName
        ) {
            throw new Error('Missing required MongoDB configuration');
        }

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
