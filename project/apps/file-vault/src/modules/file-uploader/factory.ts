import { StoredFileEntity } from './entity';
import { StoredFile } from './types';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FileUploaderFactory {
    public create(entityPlainData: StoredFile): StoredFileEntity {
        return new StoredFileEntity(entityPlainData);
    }
}
