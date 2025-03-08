import { ConfigService } from '@nestjs/config';
import { MailerAsyncOptions } from '@nestjs-modules/mailer/dist/interfaces/mailer-async-options.interface';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

import { resolve } from 'node:path';

export const getMailOptions = (): MailerAsyncOptions => {
    return {
        useFactory: async (configService: ConfigService) => {
            return {
                transport: {
                    service: 'gmail',
                    secure: false,
                    auth: {
                        user: configService.getOrThrow<string>(`mail.user`),
                        pass: configService.getOrThrow<string>(`mail.password`),
                    },
                },
                defaults: {
                    from: configService.getOrThrow<string>('mail.from'),
                },
                template: {
                    dir: resolve(__dirname, 'assets'),
                    adapter: new HandlebarsAdapter(),
                    options: {
                        strict: true,
                    },
                },
            };
        },
        inject: [ConfigService],
    };
};
