import { UsersRepository } from './repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    constructor(private readonly usersRepository: UsersRepository) {}

    public async getUsersByIds(ids: string[]) {
        return this.usersRepository.findManyById(ids);
    }
}
