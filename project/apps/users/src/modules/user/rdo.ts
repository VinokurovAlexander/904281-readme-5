import { ApiProperty } from '@nestjs/swagger';
import { Expose, Transform } from 'class-transformer';
import { ObjectId } from 'mongoose';

export class UserRdo {
    @ApiProperty({
        description: 'User id',
        example: '123',
    })
    @Expose()
    id: string;

    @ApiProperty({
        description: 'User mail',
        example: 'user@notfound.local',
    })
    @Expose()
    public mail: string;

    @ApiProperty({
        description: 'User photo',
        example: 'https://images/user.jpg',
    })
    @Expose()
    public photo: string;

    @ApiProperty({
        description: 'User firstname',
        example: 'Keks',
    })
    @Expose()
    public firstname: string;

    @ApiProperty({
        description: 'User lastname',
        example: 'Keksov',
    })
    @Expose()
    public lastname: string;

    @ApiProperty({
        description: 'Following users',
        example: ['12', '22'],
    })
    @Expose()
    public following: string[];

    @ApiProperty({
        description: 'Subscribers',
        example: ['12', '22'],
    })
    @Expose()
    public subscribers: string[];

    @Expose({ toPlainOnly: true })
    public password: string;
}
