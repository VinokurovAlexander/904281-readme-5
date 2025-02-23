import { Controller, Post, Body, UseFilters, Get } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AppServiceURL } from './config';
import { CreateUserDto, LoginUserDto } from './dto';
import { AxiosExceptionFilter } from '../filters';

@Controller()
@UseFilters(AxiosExceptionFilter)
export class AppController {
    constructor(private readonly httpService: HttpService) {}

    @Post('login')
    public async login(@Body() loginUserDto: LoginUserDto) {
        const { data } = await this.httpService.axiosRef.post(
            `${AppServiceURL.Users}/login`,
            loginUserDto,
        );

        return data;
    }

    @Post('register')
    public async signup(@Body() createUserDto: CreateUserDto) {
        const { data } = await this.httpService.axiosRef.post(
            `${AppServiceURL.Users}/register`,
            createUserDto,
        );

        return data;
    }

    @Get('posts')
    public async getPosts() {
        const { data } = await this.httpService.axiosRef.get(
            `${AppServiceURL.Posts}`,
        );

        return data;
    }
}
