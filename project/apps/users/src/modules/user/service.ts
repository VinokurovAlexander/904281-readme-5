import { UsersRepository } from './repository';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class UsersService {
    constructor(private readonly usersRepository: UsersRepository) {}

    public async getUsersByIds(ids: string[]) {
        return await this.usersRepository.findManyById(ids);
    }
}
