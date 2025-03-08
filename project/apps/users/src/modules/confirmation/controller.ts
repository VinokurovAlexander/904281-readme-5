import { Controller, Post, Body, HttpStatus } from '@nestjs/common';
import { ConfirmationService } from './service';
import { CreateConfirmationDto } from './dto';
import { ConfirmMailDto } from '@project/types';
import { UpdateConfirmDto } from '@project/types';

@Controller('confirmation')
export class ConfirmationController {
    constructor(private readonly confirmationService: ConfirmationService) {}

    @Post('create')
    async createConfirmation(@Body() body: CreateConfirmationDto) {
        const data = await this.confirmationService.createToken(body.userId);

        return { statusCode: HttpStatus.OK, data };
    }

    @Post('/')
    async confirmMail(@Body() body: ConfirmMailDto) {
        const data = await this.confirmationService.confirmMail(
            body.userId,
            body.token,
        );

        return {
            statusCode: HttpStatus.OK,
            message: 'User has been confirmed',
            data,
        };
    }

    @Post('update')
    async updateConfirmation(@Body() body: UpdateConfirmDto) {
        await this.confirmationService.updateConfirm(body.userId);

        return {
            statusCode: HttpStatus.OK,
            message: 'Confirm token has been updated',
        };
    }
}
