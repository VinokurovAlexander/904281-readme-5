import { ApiProperty } from '@nestjs/swagger'
import { Expose } from 'class-transformer'

export class UserRdo {
  @ApiProperty({
    description: 'User id',
    example: '123'
  })
  @Expose()
  public id: string

  @ApiProperty({
    description: 'User mail',
    example: 'user@notfound.local'
  })
  @Expose()
  public mail: string

  @ApiProperty({
    description: 'User photo',
    example: 'https://images/user.jpg'
  })
  @Expose()
  public photo: string

  @ApiProperty({
    description: 'User login',
    example: 'Keks'
  })
  @Expose()
  public login: string

  @ApiProperty({
    description: 'Register date',
    example: 1730368846150
  })
  @Expose()
  public registerDate: number

  @ApiProperty({
    description: 'Following users',
    example: ['12', '22']
  })
  @Expose()
  public following: string[]

  @ApiProperty({
    description: 'Subscribers',
    example: ['12', '22']
  })
  @Expose()
  public subscribers: string[]
}
