import { ConfirmationRepository } from './repository';
import { ConfirmationEntity } from './entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfirmationService {
    constructor(
        private readonly confirmationRepository: ConfirmationRepository,
    ) {}

    public async createToken(userId: string) {
        const confirmationEntity = new ConfirmationEntity(userId).init();

        return await this.confirmationRepository.saveEntityWithoutId(
            confirmationEntity,
        );
    }
}
