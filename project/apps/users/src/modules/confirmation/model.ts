import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
    collection: 'confirmation',
    timestamps: true,
})
export class ConfirmationModel extends Document<string> {
    @Prop({ required: true, unique: true })
    userId: string;

    @Prop({ required: true, unique: true })
    token: string;

    @Prop({ required: true })
    expiresIn: Date;
}

export const ConfirmationSchema =
    SchemaFactory.createForClass(ConfirmationModel);
