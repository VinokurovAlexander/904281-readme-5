import { IsString } from 'class-validator';

export class SendConfirmMessageDto {
    @IsString()
    public mail: string;

    @IsString()
    public username: string;
}
