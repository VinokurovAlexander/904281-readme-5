import { ConfirmationRepository } from './repository';
import { ConfirmationEntity } from './entity';
import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from '../user/service';

@Injectable()
export class ConfirmationService {
    constructor(
        private readonly confirmationRepository: ConfirmationRepository,
        private readonly usersService: UsersService,
    ) {}

    public async createToken(userId: string) {
        const confirmationEntity = new ConfirmationEntity(userId).init();

        return await this.confirmationRepository.saveEntityWithoutId(
            confirmationEntity,
        );
    }

    public async confirmMail(userId: string, token: string) {
        const user = await this.usersService.getUserById(userId);
        const confirmData = await this.confirmationRepository.findTokenByUserId(
            userId,
        );

        if (token !== confirmData.token) {
            throw new BadRequestException('Token is invalid');
        }

        await this.usersService.confirmUser(user);

        await this.confirmationRepository.deleteById(confirmData.id);
    }
}
