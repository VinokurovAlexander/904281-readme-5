import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './service';
import { GetUsersDto } from './dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post('get-by-ids')
    async getUsersByIds(@Body() body: GetUsersDto) {
        return this.usersService.getUsersByIds(body.ids);
    }
}
