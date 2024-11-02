import { Module } from '@nestjs/common';

import { AuthModule} from "../modules/auth";
import { ConfigUsersModule } from "../modules/config";
import { getMongooseOptions } from "../lib/mongo";
import {MongooseModule} from "@nestjs/mongoose";

@Module({
  imports: [AuthModule, ConfigUsersModule, MongooseModule.forRootAsync(getMongooseOptions())],
  controllers: [],
  providers: [],
})
export class AppModule {}
