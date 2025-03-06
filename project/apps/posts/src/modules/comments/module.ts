import { Module } from '@nestjs/common';
import { CommentsController } from './controller';
import { CommentsRepository } from './repository';
import { CommentsService } from './service';
import { CommentFactory } from '../../app/factories';

@Module({
    imports: [],
    providers: [CommentsRepository, CommentsService, CommentFactory],
    controllers: [CommentsController],
})
export class CommentsModule {}
