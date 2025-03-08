import { IsString, validateOrReject } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { registerAs } from '@nestjs/config';

class MailConfig {
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

const getMailConfig = async () => {
    const config = plainToClass(MailConfig, {
        user: process.env.MAIL_USER_NAME,
        password: process.env.MAIL_USER_PASSWORD,
        from: process.env.MAIL_FROM,
    });

    await config.validate();

    return config;
};

export const mailConfig = registerAs('mail', () => getMailConfig());
