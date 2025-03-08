import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
    constructor(private readonly mailerService: MailerService) {}

    public async sendConfirmMessage(
        mail: string,
        username: string,
        confirmToken: string,
    ) {
        await this.mailerService.sendMail({
            to: mail,
            subject: 'Подтвердите вашу почту',
            template: './confirm',
            context: {
                username,
                confirmationLink: `http:localhost:4200/confirm/${confirmToken}`,
            },
        });
    }
}
