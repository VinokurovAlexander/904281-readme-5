import { ApiProperty  } from "@nestjs/swagger";
import { User } from "../user.interface";

type UserDto = Pick<User, 'mail' | 'login' | 'password' | 'photo'>

export class CreateUserDto implements UserDto {
  @ApiProperty({
    description: 'User mail',
    example: 'user@notfound.local'
  })
  mail: string

  @ApiProperty({
    description: 'User login',
    example: 'Keks'
  })
  login: string
  
  @ApiProperty({
    description: 'User password',
    example: 'qwerty123'
  })
  password: string

  @ApiProperty({
    description: 'User photo',
    example: 'https://images/user.jpg'
  })
  photo: string
}
