import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginUserDto {
    @ApiProperty({
        description: 'User mail',
        example: 'user@notfound.local',
    })
    @IsEmail()
    @IsNotEmpty()
    public mail: string;

    @ApiProperty({
        description: 'User password',
        example: 'qwerty123',
    })
    @IsNotEmpty()
    password: string;
}
