/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';


import { AppModule } from './app/module';

import { initSpecification } from './specification';

const VERSION = 'v1'
const globalPrefix = `api/${VERSION}`;

async function bootstrap() {
  const port = process.env.PORT || 3000;

  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix(globalPrefix);

  initSpecification({ version: VERSION, app})

  await app.listen(port);

  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
