export interface File {
    originalName: string;
    subDirectory: string;
    size: number;
    mimetype: string;
    hashName: string;
    path: string;
}

export interface StoredFile extends File {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}
