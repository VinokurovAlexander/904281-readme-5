import { ApiProperty } from '@nestjs/swagger';
import { BaseUser } from '@project/types';

type UserDto = Pick<BaseUser, 'mail' | 'login' | 'password' | 'photo'>;

export class CreateUserDto implements UserDto {
    @ApiProperty({
        description: 'User mail',
        example: 'user@notfound.local',
        required: true,
    })
    mail: string;

    @ApiProperty({
        description: 'User login',
        example: 'Keks',
        required: true,
    })
    login: string;

    @ApiProperty({
        description: 'User password',
        example: 'qwerty123',
        required: true,
    })
    password: string;

    @ApiProperty({
        description: 'User photo',
        example: 'https://images/user.jpg',
        required: true,
    })
    photo: string;
}
