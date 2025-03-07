import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { mongoConfig } from '@project/config';
import { jwtConfig } from '../jwt';
import { mailerConfig } from '../mailer';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            cache: true,
            envFilePath: 'apps/users/.env',
            load: [mongoConfig, jwtConfig, mailerConfig],
        }),
    ],
})
export class ConfigUsersModule {}
