import {Module} from "@nestjs/common";
import {ConfigModule} from "@nestjs/config";
import { mongoConfig } from "./mongo";

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      envFilePath: '../.env',
      load: [mongoConfig]
    })
  ]
})

export class ConfigUsersModule {}
