import { Controller, Get, HttpStatus, Param } from '@nestjs/common';
import { PostService } from './app.service';
import { fillDto } from '@project/utils';
import { PostRdo } from './rdo';

@Controller('posts')
export class PostController {
    constructor(private readonly postService: PostService) {}

    @Get('/')
    public async index() {
        const postEntities = await this.postService.getPosts();
        const posts = postEntities.map((entity) => entity.toPOJO());

        return { statusCode: HttpStatus.OK, data: fillDto(PostRdo, posts) };
    }

    @Get('/:id')
    public async show(@Param('id') id: string) {
        const postEntity = await this.postService.getPostById(id);

        return {
            statusCode: HttpStatus.OK,
            data: fillDto(PostRdo, postEntity.toPOJO()),
        };
    }
}
