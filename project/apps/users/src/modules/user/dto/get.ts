import { IsArray, IsString } from 'class-validator';

export class GetUsersDto {
    @IsArray()
    @IsString({ each: true })
    ids: string[];
}
