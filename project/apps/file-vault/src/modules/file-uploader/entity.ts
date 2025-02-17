import { StorableEntity } from '@project/types';
import { File, StoredFile } from './types';

export class FileEntity implements StorableEntity<File> {
    public originalName: string;
    public subDirectory: string;
    public size: number;
    public mimetype: string;
    public hashName: string;
    public path: string;

    constructor(file: File) {
        this.populate(file);
    }

    public populate(file: File) {
        this.originalName = file.originalName;
        this.size = file.size;
        this.mimetype = file.mimetype;
        this.hashName = file.hashName;
        this.path = file.path;
        this.subDirectory = file.subDirectory;
    }

    toPOJO(): File {
        return {
            originalName: this.originalName,
            size: this.size,
            mimetype: this.mimetype,
            hashName: this.hashName,
            path: this.path,
            subDirectory: this.subDirectory,
        };
    }
}

export class StoredFileEntity extends FileEntity {
    public id: string;
    public createdAt: Date;
    public updatedAt: Date;

    constructor(file: StoredFile) {
        super(file);

        this.id = file.id;
        this.createdAt = file.createdAt;
        this.updatedAt = file.updatedAt;
    }

    // Переопределение метода toPOJO для добавления id
    toPOJO(): StoredFile {
        const pojo = super.toPOJO();

        return {
            ...pojo,
            id: this.id,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
        };
    }
}
