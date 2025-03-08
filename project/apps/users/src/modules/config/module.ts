import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { mongoConfig } from '@project/config';
import { jwtConfig } from '../jwt';
import { mailConfig } from '../mailer';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            cache: true,
            envFilePath: 'apps/users/.env',
            load: [mongoConfig, jwtConfig, mailConfig],
        }),
    ],
})
export class ConfigUsersModule {}
