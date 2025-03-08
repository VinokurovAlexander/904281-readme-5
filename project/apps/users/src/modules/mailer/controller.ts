import { Controller, Post, Body } from '@nestjs/common';
import { MailService } from './service';
import { SendConfirmMessageDto } from './dto';
import { HttpStatusCode } from 'axios';

@Controller('mail')
export class MailController {
    constructor(private readonly mailService: MailService) {}

    @Post('send-confirm')
    public async sendConfirmMessage(@Body() data: SendConfirmMessageDto) {
        await this.mailService.sendConfigMessage(data.mail, data.username);

        return { statusCode: HttpStatusCode.Ok };
    }
}
