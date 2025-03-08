import { UsersRepository } from './repository';
import { Injectable, Logger } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UsersService {
    constructor(private readonly usersRepository: UsersRepository) {}

    public async getUsersByIds(ids: string[]) {
        return await this.usersRepository.findManyById(ids);
    }

    public async getUserById(id: string) {
        return await this.usersRepository.findById(id);
    }

    public async confirmUser(user: User) {
        user.isConfirmed = true;

        await this.usersRepository.update(user);
    }
}
