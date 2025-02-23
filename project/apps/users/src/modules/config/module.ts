import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { mongoConfig } from '@project/config';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            cache: true,
            envFilePath: 'apps/users/.env',
            load: [mongoConfig],
        }),
    ],
})
export class ConfigUsersModule {}
