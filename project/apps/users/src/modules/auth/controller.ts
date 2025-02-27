import {
    Controller,
    Post,
    Body,
    HttpStatus,
    Res,
    Req,
    Get,
    Logger,
} from '@nestjs/common';
import { fillDto } from '@project/utils';
import { UserRdo } from '../user/rdo';
import { CreateUserDto, LoginUserDto } from '../user/dto';
import { AuthService } from './service';
import { ApiResponse } from '@nestjs/swagger';
import { Response, Request } from 'express';

@Controller('/')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @ApiResponse({
        type: UserRdo,
        status: HttpStatus.CREATED,
        description: 'The new user has been successfully created.',
    })
    @Post('register')
    public async register(@Body() dto: CreateUserDto, @Res() res: Response) {
        const user = await this.authService.register(dto);
        const accessToken = await this.authService.createUserToken(user);

        res.cookie('access_token', accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            //sync with env
            maxAge: 1000 * 60 * 5,
        });

        return res.send({
            statusCode: 200,
            data: fillDto(UserRdo, user.toPOJO()),
        });
    }

    @ApiResponse({
        type: UserRdo,
        status: HttpStatus.OK,
        description: 'User has been successfully logged',
    })
    @ApiResponse({
        status: HttpStatus.UNAUTHORIZED,
        description: 'User password is wrong',
    })
    @ApiResponse({
        status: HttpStatus.NOT_FOUND,
        description: 'User not found',
    })
    @Post('login')
    public async login(@Body() dto: LoginUserDto) {
        const user = await this.authService.verifyUser(dto);
        const accessToken = await this.authService.createUserToken(user);

        return {
            statusCode: 200,
            data: fillDto(UserRdo, user.toPOJO()),
            accessToken,
        };
    }

    @Get('check')
    public async check(@Req() req: Request) {
        const token = req.cookies['access_token'];

        const user = await this.authService.checkAuth(token);

        return {
            statusCode: 200,
            data: fillDto(UserRdo, user.toPOJO()),
        };
    }
}
