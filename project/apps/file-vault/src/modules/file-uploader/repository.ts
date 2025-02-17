import { Injectable } from '@nestjs/common';
import { MongoRepository } from '@project/repository';
import { FileWrittenEntity } from './entity';
import { FileModel } from './model';
import { FileUploaderFactory } from './factory';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class FileUploaderRepository extends MongoRepository<
    FileWrittenEntity,
    FileModel
> {
    constructor(
        entityFactory: FileUploaderFactory,
        @InjectModel(FileModel.name) fileModel: Model<FileModel>,
    ) {
        super(entityFactory, fileModel);
    }
}
