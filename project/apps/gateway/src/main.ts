/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { RequestIdInterceptor } from './interceptors';
import cookieParser from 'cookie-parser';

const VERSION = 'v1';
const globalPrefix = `api/${VERSION}`;

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.setGlobalPrefix(globalPrefix);
    app.useGlobalInterceptors(new RequestIdInterceptor());
    app.use(cookieParser());

    app.enableCors({
        origin: true,
        credentials: true,
    });

    const port = process.env.PORT || 3000;
    await app.listen(port);
    Logger.log(
        `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`,
    );
}

bootstrap();
