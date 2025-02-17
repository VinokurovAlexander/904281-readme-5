export interface StoredFileInfo {
    filename: string;
    fileExtension: string;
    subDirectory: string;
    path: string;
}

export interface WrittenFile {
    originalName: string;
    subDirectory: string;
    size: number;
    mimetype: string;
    hashName: string;
    path: string;
}

export interface StoredFile extends WrittenFile {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}
