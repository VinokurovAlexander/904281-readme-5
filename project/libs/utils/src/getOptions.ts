import { MongooseModuleAsyncOptions } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';
import { getMongoConnectionString } from './getMongoConnectionString';

export const getMongooseOptions = (): MongooseModuleAsyncOptions => ({
    useFactory: async (config: ConfigService) => {
        const mongoUri = getMongoConnectionString({
            username: config.get<string>('db.user'),
            password: config.get<string>('db.password'),
            host: config.get<string>('db.host'),
            port: config.get<number>('db.port'),
            authDatabase: config.get<string>('db.authBase'),
            databaseName: config.get<string>('db.name'),
        });

        return {
            uri: mongoUri,
        };
    },
    inject: [ConfigService],
});
