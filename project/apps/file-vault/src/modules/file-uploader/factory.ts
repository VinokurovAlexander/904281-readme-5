import { FileWrittenEntity } from './entity';
import { WrittenFile } from './types';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FileUploaderFactory {
    public create(entityPlainData: WrittenFile): FileWrittenEntity {
        return new FileWrittenEntity(entityPlainData);
    }
}
