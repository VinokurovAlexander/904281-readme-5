import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { FileUploaderModule } from '../modules/file-uploader';
import { getMongooseOptions } from '@project/utils';

@Module({
    imports: [
        FileUploaderModule,
        MongooseModule.forRootAsync(getMongooseOptions()),
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
