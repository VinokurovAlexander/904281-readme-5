import { Module } from '@nestjs/common';

import { AuthModule } from "../auth/module";
import { ConfigUsersModule } from "../config";

@Module({
  imports: [AuthModule, ConfigUsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
