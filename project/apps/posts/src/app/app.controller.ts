import { Controller, Get } from '@nestjs/common';
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

        return fillDto(PostRdo, posts);
    }
}
