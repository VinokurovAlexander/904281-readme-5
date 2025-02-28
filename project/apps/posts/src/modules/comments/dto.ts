import { IsString, IsUUID } from 'class-validator';

export class CreateCommentDto {
    @IsString()
    text: string;

    @IsUUID()
    userId: string;

    @IsUUID()
    postId: string;
}
