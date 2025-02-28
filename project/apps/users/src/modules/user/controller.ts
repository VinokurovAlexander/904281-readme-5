import { Controller, Post, Body, HttpStatus } from '@nestjs/common';
import { UsersService } from './service';
import { GetUsersDto } from './dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post('get-by-ids')
    async getUsersByIds(@Body() body: GetUsersDto) {
        const users = await this.usersService.getUsersByIds(body.ids);

        return { status: HttpStatus.OK, data: users };
    }
}
