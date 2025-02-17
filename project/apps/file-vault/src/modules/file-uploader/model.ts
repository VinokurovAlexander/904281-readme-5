import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
    collection: 'files',
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
})
export class FileModel extends Document<string> {
    @Prop({
        required: true,
    })
    public originalName: string;

    @Prop({
        required: true,
    })
    public hashName: string;

    @Prop({
        required: true,
    })
    public subDirectory: string;

    @Prop({
        required: true,
    })
    public mimetype: string;

    @Prop({
        required: true,
    })
    public path: string;

    @Prop({
        required: true,
    })
    public size: number;
}

export const FileSchema = SchemaFactory.createForClass(FileModel);
