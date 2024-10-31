import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

interface Options {
    version: string
    app: INestApplication
}

export const initSpecification = (options: Options) => {
    const config = new DocumentBuilder().setTitle('Users app').setDescription('Users app api').setVersion(options.version).build()

    const document = SwaggerModule.createDocument(options.app, config);
    SwaggerModule.setup('spec', options.app, document);
}