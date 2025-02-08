import { Injectable } from '@nestjs/common';
import { PostRepository } from './repository';

@Injectable()
export class PostService {
    constructor(private readonly repository: PostRepository) {}

    public async getPosts() {
        return this.repository.find();
    }

    public async getPostById(id: string) {
        return this.repository.findById(id);
    }
}
