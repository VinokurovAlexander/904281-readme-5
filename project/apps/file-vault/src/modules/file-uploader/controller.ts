import {
    Controller,
    Post,
    UseInterceptors,
    UploadedFile,
    Get,
    Param,
} from '@nestjs/common';
import { FileUploaderService } from './service';
import { FileInterceptor } from '@nestjs/platform-express';
import { fillDto } from '@project/utils';
import { UploadedFileRdo } from './rdo';

@Controller('files')
export class FileUploaderController {
    constructor(private readonly fileUploaderService: FileUploaderService) {}

    @Post('/upload')
    @UseInterceptors(FileInterceptor('file'))
    public async uploadFile(@UploadedFile() file: Express.Multer.File) {
        const entity = await this.fileUploaderService.saveFile(file);

        return fillDto(UploadedFileRdo, entity.toPOJO());
    }

    @Get(':id')
    public async getFile(@Param('id') id: string) {
        const entity = await this.fileUploaderService.getFile(id);

        return fillDto(UploadedFileRdo, entity?.toPOJO());
    }
}
