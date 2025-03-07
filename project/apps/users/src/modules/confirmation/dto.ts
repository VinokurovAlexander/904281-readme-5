import { IsString } from 'class-validator';
import { Expose } from 'class-transformer';

export class ConfirmationDto {
    @Expose()
    @IsString()
    userId: string;
}
