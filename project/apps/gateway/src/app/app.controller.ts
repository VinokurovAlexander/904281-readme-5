import {
    Controller,
    Post,
    Body,
    UseFilters,
    Get,
    Logger,
    Res,
    Req,
    Param,
    HttpStatus,
} from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AppServiceURL } from './config';
import { CreateUserDto, LoginUserDto } from './dto';
import { AxiosExceptionFilter } from '../filters';
import { Response, Request } from 'express';
import {
    getUserIdFromPostAuthor,
    getUsersIdFromPostComments,
    mergePostCommentsWithUsers,
} from '../utils';
import { CreateCommentDto } from '@project/types';
import { mergePostsWithUsers } from '../utils/posts';

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
            `${AppServiceURL.Auth}/login`,
            loginUserDto,
        );

        res.cookie('access_token', data.accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            //TODO sync with env
            maxAge: 1000 * 60 * 5,
        });

        return res.send(data);
    }

    @Post('register')
    public async signup(
        @Body() createUserDto: CreateUserDto,
        @Res() res: Response,
    ) {
        const { data: userResponse } = await this.httpService.axiosRef.post(
            `${AppServiceURL.Auth}/register`,
            createUserDto,
        );

        res.cookie('access_token', userResponse.accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            //TODO sync with env
            maxAge: 1000 * 60 * 5,
        });

        await this.httpService.axiosRef.post(`${AppServiceURL.ConfirmCreate}`, {
            userId: userResponse.data.id,
        });

        return res.send(userResponse);
    }

    @Get('posts')
    public async getPosts() {
        const { data: postResponse } = await this.httpService.axiosRef.get(
            `${AppServiceURL.Posts}`,
        );

        const userIds = getUserIdFromPostAuthor(postResponse.data);

        const { data: usersResponse } = await this.httpService.axiosRef.post(
            `${AppServiceURL.Users}/get-by-ids`,
            { ids: userIds },
        );

        const posts = mergePostsWithUsers(
            postResponse.data,
            usersResponse.data,
        );

        return { statusCode: HttpStatus.OK, data: posts };
    }

    @Get('posts/:id')
    public async getPost(@Param('id') id: string) {
        const { data: postResponse } = await this.httpService.axiosRef.get(
            `${AppServiceURL.Posts}/${id}`,
        );

        const userIds = getUsersIdFromPostComments(postResponse.data);

        const { data: usersResponse } = await this.httpService.axiosRef.post(
            `${AppServiceURL.Users}/get-by-ids`,
            { ids: userIds },
        );

        const post = mergePostCommentsWithUsers(
            postResponse.data,
            usersResponse.data,
        );

        return { statusCode: HttpStatus.OK, data: post };
    }

    @Get('check')
    public async checkUser(@Req() req: Request) {
        const { data } = await this.httpService.axiosRef.get(
            `${AppServiceURL.Auth}/check`,
            {
                headers: {
                    Cookie: req.headers.cookie,
                },
            },
        );

        return data;
    }

    @Post('add-comment')
    public async addComment(@Body() dto: CreateCommentDto) {
        Logger.log('dto is', dto);

        const { data } = await this.httpService.axiosRef.post(
            `${AppServiceURL.Comments}/add`,
            dto,
        );

        return data;
    }
}
