import { Module } from '@nestjs/common';

import { PostRepository } from './repository';
import { PostController } from './app.controller';
import { PostService } from './app.service';
import { PostFactory } from './factories';
import { PrismaClientModule } from '@project/prisma';

@Module({
    imports: [PrismaClientModule],
    providers: [PostRepository, PostService, PostFactory],
    controllers: [PostController],
})
export class AppModule {}
