import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseUser } from '@project/types';

@Schema({
    collection: 'users',
    timestamps: true,
})
export class UserModel extends Document<string> {
    @Prop({ required: true })
    public firstname: string;

    @Prop({ required: true })
    public lastname: string;

    @Prop({ required: true })
    public mail: string;

    @Prop({ required: true })
    public password: string;

    @Prop()
    public photo: string;

    @Prop({ required: true })
    public registerDate: number;

    @Prop()
    public following: string[];

    @Prop()
    public subscribers: string[];
}

export const UserSchema = SchemaFactory.createForClass(UserModel);
