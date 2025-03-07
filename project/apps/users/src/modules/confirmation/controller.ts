import { Controller, Post, Body, HttpStatus } from '@nestjs/common';
import { ConfirmationService } from './service';
import { ConfirmationDto } from './dto';

@Controller('confirmation')
export class ConfirmationController {
    constructor(private readonly confirmationService: ConfirmationService) {}

    @Post('create')
    async createConfirmation(@Body() body: ConfirmationDto) {
        await this.confirmationService.createToken(body.userId);

        return { statusCode: HttpStatus.OK };
    }
}
