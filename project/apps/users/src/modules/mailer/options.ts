import { ConfigService } from '@nestjs/config';
import { MailerAsyncOptions } from '@nestjs-modules/mailer/dist/interfaces/mailer-async-options.interface';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

import { resolve } from 'node:path';

const getMailerOptions = (): MailerAsyncOptions => {
    return {
        useFactory: async (configService: ConfigService) => {
            return {
                transport: {
                    host: configService.getOrThrow<string>(`mailer.host`),
                    port: configService.getOrThrow<number>(`mailer.port`),
                    secure: false,
                    auth: {
                        user: configService.getOrThrow<string>(`mailer.user`),
                        pass: configService.getOrThrow<string>(
                            `mailer.password`,
                        ),
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
