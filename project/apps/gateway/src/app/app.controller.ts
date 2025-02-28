import {
    Controller,
    Post,
    Body,
    UseFilters,
    Get,
    Logger,
    Res,
    Req,
} from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AppServiceURL } from './config';
import { CreateUserDto, LoginUserDto } from './dto';
import { AxiosExceptionFilter } from '../filters';
import { Response } from 'express';

@Controller()
@UseFilters(AxiosExceptionFilter)
export class AppController {
    constructor(private readonly httpService: HttpService) {}

    @Post('login')
    public async login(
        @Body() loginUserDto: LoginUserDto,
        @Res() res: Response,
    ) {
        const { data } = await this.httpService.axiosRef.post(
            `${AppServiceURL.Users}/login`,
            loginUserDto,
        );

        res.cookie('access_token', data.accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            //sync with env
            maxAge: 1000 * 60 * 5,
        });

        return res.send(data);
    }

    @Post('register')
    public async signup(
        @Body() createUserDto: CreateUserDto,
        @Res() res: Response,
    ) {
        const { data } = await this.httpService.axiosRef.post(
            `${AppServiceURL.Users}/register`,
            createUserDto,
        );

        res.cookie('access_token', data.accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            //sync with env
            maxAge: 1000 * 60 * 5,
        });

        return res.send(data);
    }

    @Get('posts')
    public async getPosts() {
        const { data } = await this.httpService.axiosRef.get(
            `${AppServiceURL.Posts}`,
        );

        return data;
    }

    @Get('check')
    public async checkUser(@Req() req) {
        const { data } = await this.httpService.axiosRef.get(
            `${AppServiceURL.Users}/check`,
            {
                headers: {
                    Cookie: req.headers.cookie,
                },
            },
        );

        return data;
    }
}
