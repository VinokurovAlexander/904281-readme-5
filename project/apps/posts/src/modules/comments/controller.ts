import { Controller, Post, Body, HttpStatus } from '@nestjs/common';
import { CommentsService } from './service';
import { CreateCommentDto } from '@project/types';

@Controller('comments')
export class CommentsController {
    constructor(private readonly commentsService: CommentsService) {}

    @Post('add')
    public async add(@Body() dto: CreateCommentDto) {
        try {
            const comment = await this.commentsService.addComment(dto);

            return { statusCode: HttpStatus.OK, data: comment.toPOJO() };
        } catch (error) {
            return {
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                message:
                    error instanceof Error
                        ? error.message
                        : 'something went wrong',
            };
        }
    }
}
