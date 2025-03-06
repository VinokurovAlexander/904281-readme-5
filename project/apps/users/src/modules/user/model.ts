import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
    collection: 'users',
    timestamps: true,
    toObject: { virtuals: true },
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

    @Prop()
    public following: string[];

    @Prop()
    public subscribers: string[];
}

export const UserSchema = SchemaFactory.createForClass(UserModel);

UserSchema.virtual('id').get(function () {
    return this._id.toString();
});
