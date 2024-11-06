import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from './user.interface';

@Schema({
    collection: 'users',
    timestamps: true,
})
export class UserModel extends Document implements User {
    @Prop({ required: true })
    public login: string;

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

    @Prop({ required: true })
    public id: string;
}

export const UserSchema = SchemaFactory.createForClass(UserModel);
