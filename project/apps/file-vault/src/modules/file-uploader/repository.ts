import { Injectable } from '@nestjs/common';
import { MongoRepository } from '@project/repository';
import { FileModel } from './model';
import { FileUploaderFactory } from './factory';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { StoredFileEntity } from './entity';

@Injectable()
export class FileUploaderRepository extends MongoRepository<
    StoredFileEntity,
    FileModel
> {
    constructor(
        entityFactory: FileUploaderFactory,
        @InjectModel(FileModel.name) fileModel: Model<FileModel>,
    ) {
        super(entityFactory, fileModel);
    }
}
