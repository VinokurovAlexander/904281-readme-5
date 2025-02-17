import { StorableEntity } from '@project/types';
import { WrittenFile } from './types';

export class FileWrittenEntity implements StorableEntity<WrittenFile> {
    public originalName: string;
    public subDirectory: string;
    public size: number;
    public mimetype: string;
    public hashName: string;
    public path: string;

    constructor(file: WrittenFile) {
        this.populate(file);
    }

    public populate(file: WrittenFile) {
        this.originalName = file.originalName;
        this.size = file.size;
        this.mimetype = file.mimetype;
        this.hashName = file.hashName;
        this.path = file.path;
        this.subDirectory = file.subDirectory;
    }

    toPOJO(): WrittenFile {
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
