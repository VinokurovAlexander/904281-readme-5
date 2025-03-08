import { IsMongoId, IsString, IsUUID } from 'class-validator';
import { Expose } from 'class-transformer';

export class CreateCommentDto {
    @IsString()
    text: string;

    @IsUUID()
    userId: string;

    @IsUUID()
    postId: string;
}

export class ConfirmMailDto {
    @Expose()
    @IsMongoId()
    userId: string;

    @Expose()
    @IsString()
    token: string;
}

export class UpdateConfirmDto {
    @Expose()
    @IsMongoId()
    userId: string;
}
