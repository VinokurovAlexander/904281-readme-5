import {MongooseModuleAsyncOptions} from "@nestjs/mongoose";
import {ConfigService} from "@nestjs/config";
import {getMongoConnectionString} from "@project/utils";

export const getMongooseOptions = (): MongooseModuleAsyncOptions => ({
  useFactory: async (config: ConfigService) => ({
    uri: getMongoConnectionString({
      username: config.get<string>('db.user'),
      password: config.get<string>('db.password'),
      host: config.get<string>('db.host'),
      port: config.get<string>('db.port'),
      authDatabase: config.get<string>('db.authBase'),
      databaseName: config.get<string>('db.name'),
    })
  }),
  inject: [ConfigService]
})
