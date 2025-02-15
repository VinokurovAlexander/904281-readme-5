import {
    Controller,
    Post,
    UseInterceptors,
    UploadedFile,
} from '@nestjs/common';
import { FileUploaderService } from './service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('files')
export class FileUploaderController {
    constructor(private readonly fileUploaderService: FileUploaderService) {}

    @Post('/upload')
    @UseInterceptors(FileInterceptor('file'))
    public async uploadFile(@UploadedFile() file: Express.Multer.File) {
        return this.fileUploaderService.saveFile(file);
    }
}
