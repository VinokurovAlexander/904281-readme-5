import { IsString } from 'class-validator';
import { Expose } from 'class-transformer';

export class CreateConfirmationDto {
    @Expose()
    @IsString()
    userId: string;
}
