import { Module } from '@nestjs/common';

import { PostRepository } from './repository';
import { PrismaClientModule } from '../../../../libs/repository/src/postgres/module';
import { PostController } from './app.controller';
import { PostService } from './app.service';
import { PostFactory } from './factories';

@Module({
    imports: [PrismaClientModule],
    providers: [PostRepository, PostService, PostFactory],
    controllers: [PostController],
})
export class AppModule {}
