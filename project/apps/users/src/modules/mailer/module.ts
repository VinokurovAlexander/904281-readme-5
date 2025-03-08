import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { getMailOptions } from './options';
import { MailService } from './service';
import { MailController } from './controller';

@Module({
    imports: [MailerModule.forRootAsync(getMailOptions())],
    providers: [MailService],
    controllers: [MailController],
})
export class MailModule {}
