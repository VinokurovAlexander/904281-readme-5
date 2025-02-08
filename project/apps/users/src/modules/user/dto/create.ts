import { ApiProperty } from '@nestjs/swagger';
import { BaseUser } from '@project/types';
import {IsEmail, IsNotEmpty} from "class-validator";

type UserDto = Pick<BaseUser, 'mail' | 'login' | 'password' | 'photo'>;

export class CreateUserDto implements UserDto {
    @ApiProperty({
        description: 'User mail',
        example: 'user@notfound.local',
        required: true,
    })
    @IsNotEmpty()
    @IsEmail()
    mail: string;

    @ApiProperty({
        description: 'User login',
        example: 'Keks',
        required: true,
    })
    @IsNotEmpty()
    login: string;

    @ApiProperty({
        description: 'User password',
        example: 'qwerty123',
        required: true,
    })
    @IsNotEmpty()
    password: string;

    @ApiProperty({
        description: 'User photo',
        example: 'https://images/user.jpg',
        required: true,
    })
    photo: string;
}
