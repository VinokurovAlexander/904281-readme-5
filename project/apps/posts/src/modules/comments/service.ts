import { CommentsRepository } from './repository';
import { CreateCommentDto } from './dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CommentsService {
    constructor(private readonly repository: CommentsRepository) {}

    public async addComment(commentDto: CreateCommentDto) {
        return await this.repository.add(commentDto);
    }
}
