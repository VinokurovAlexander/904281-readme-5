import { Module } from '@nestjs/common';

import { FileUploaderModule } from '../modules/file-uploader';

@Module({
    imports: [FileUploaderModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
