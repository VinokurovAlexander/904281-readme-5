import { ConfirmationRepository } from './repository';
import { ConfirmationEntity } from './entity';
import {
    BadRequestException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { UsersService } from '../user/service';
import { MailService } from '../mailer/service';

@Injectable()
export class ConfirmationService {
    constructor(
        private readonly confirmationRepository: ConfirmationRepository,
        private readonly usersService: UsersService,
        private readonly mailService: MailService,
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

        if (!confirmData) {
            throw new NotFoundException(
                `Confirm token for user with id ${userId} not found`,
            );
        }

        if (token !== confirmData.token) {
            throw new BadRequestException('Token is invalid');
        }

        const confirmedUser = await this.usersService.confirmUser(user);

        await this.confirmationRepository.deleteById(confirmData.id);

        return confirmedUser;
    }

    public async updateConfirm(userId: string) {
        const user = await this.usersService.getUserById(userId);

        if (user.isConfirmed) {
            throw new BadRequestException(
                `User with id ${userId} already confirmed`,
            );
        }

        const currentConfirmData =
            await this.confirmationRepository.findTokenByUserId(user.id);

        const confirmationEntity = new ConfirmationEntity(userId).init();

        if (!currentConfirmData) {
            await this.confirmationRepository.save(confirmationEntity);
        } else {
            confirmationEntity.id = currentConfirmData.id;
            await this.confirmationRepository.update(confirmationEntity);
        }

        await this.mailService.sendConfirmMessage(
            user.mail,
            user.getUsername(),
            confirmationEntity.token,
        );
    }
}
