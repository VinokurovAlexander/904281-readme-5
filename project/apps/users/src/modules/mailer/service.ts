import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
    constructor(private readonly mailerService: MailerService) {}

    public async sendConfigMessage(mail: string, username: string) {
        await this.mailerService.sendMail({
            to: mail,
            subject: 'Подтвердите вашу почту',
            template: './confirm',
            context: {
                username,
                confirmationLink: 'bla bla',
            },
        });
    }
}
