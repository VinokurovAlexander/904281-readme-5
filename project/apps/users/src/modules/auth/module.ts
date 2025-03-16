import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

import { AuthController } from './controller';
import { AuthService } from './service';
import { UserModule } from '../user/module';
import { getJwtOptions } from '../jwt';
import { ConfirmationModule } from '../confirmation';
import { MailModule } from '../mailer/module';

@Module({
    imports: [
        UserModule,
        JwtModule.registerAsync({
            inject: [ConfigService],
            useFactory: getJwtOptions,
        }),
        ConfirmationModule,
        MailModule,
    ],
    providers: [AuthService],
    controllers: [AuthController],
})
export class AuthModule {}
