import { IsNumber, IsString, validateOrReject } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { registerAs } from '@nestjs/config';

class MailerConfig {
    @IsString({ message: 'SMTP host is required' })
    public smtpHost: string;

    @IsNumber()
    public smtpPort: number;

    @IsString({ message: 'Mail user is required' })
    public user: string;

    @IsString({ message: 'Mail password is required' })
    public password: string;

    @IsString({ message: 'Mail from address is required' })
    public from: string;

    public async validate() {
        try {
            await validateOrReject(this);
        } catch (err) {
            console.log('Validate mailer config error', err);
            throw err;
        }
    }
}

const getMailerConfig = async () => {
    const config = plainToClass(MailerConfig, {
        smtpHost: process.env.MAIL_SMTP_HOST,
        smtpPort: parseInt(process.env.MAIL_SMTP_PORT ?? '25', 10),
        user: process.env.MAIL_USER_NAME,
        password: process.env.MAIL_USER_PASSWORD,
        from: process.env.MAIL_FROM,
    });

    await config.validate();

    return config;
};

export const mailerConfig = registerAs('mailer', () => getMailerConfig());
