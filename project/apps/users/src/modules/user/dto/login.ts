import { ApiProperty  } from "@nestjs/swagger"

export class LoginUserDto {
  @ApiProperty({
    description: 'User mail',
    example: 'user@notfound.local'
  })
  public mail: string

  @ApiProperty({
    description: 'User password',
    example: 'qwerty123'
  })
  public password: string
}
