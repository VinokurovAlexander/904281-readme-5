import {
    ConflictException,
    HttpException,
    HttpStatus,
    Injectable,
    Logger,
    NotFoundException,
    UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto, LoginUserDto } from '../user/dto';
import { UsersRepository } from '../user/repository';
import { RegisteringUser, User } from '../user/user.entity';
import { AccessTokenPayload } from '../../types';
import { ConfirmationService } from '../confirmation/service';
import { MailService } from '../mailer/service';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersRepository: UsersRepository,
        private readonly jwtService: JwtService,
        private readonly confirmationService: ConfirmationService,
        private readonly mailService: MailService,
    ) {}

    public async register(dto: CreateUserDto) {
        const { mail } = dto;
        const existUser = await this.usersRepository.findByMail(mail);

        if (existUser) {
            throw new ConflictException('User with this email exists');
        }

        const userEntity = await new RegisteringUser(dto).init(dto.password);

        const storedUser = await this.usersRepository.saveEntityWithoutId(
            userEntity,
        );
        const accessToken = await this.createUserToken(storedUser);
        const confirmData = await this.confirmationService.createToken(
            storedUser.id,
        );

        await this.mailService.sendConfirmMessage(
            storedUser.mail,
            storedUser.getUsername(),
            confirmData.token,
        );

        return { user: storedUser, accessToken };
    }

    public async verifyUser(dto: LoginUserDto) {
        const { mail, password } = dto;
        const user = await this.usersRepository.findByMail(mail);

        if (!user) {
            throw new NotFoundException('User not found');
        }

        const isValidPassword = await user.comparePassword(password);

        if (!isValidPassword) {
            throw new UnauthorizedException('User password is wrong');
        }

        return user;
    }

    public async createUserToken(user: User): Promise<string> {
        const payload: AccessTokenPayload = {
            mail: user.mail,
        };

        try {
            return await this.jwtService.signAsync(payload);
        } catch (error) {
            throw new HttpException(
                'Ошибка при создании токена.',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }

    public async checkAuth(token?: string) {
        if (!token) {
            throw new UnauthorizedException('access cookie not found');
        }

        let payload: AccessTokenPayload;

        try {
            payload = await this.jwtService.verifyAsync<AccessTokenPayload>(
                token,
            );
        } catch (error) {
            throw new UnauthorizedException('access not valid');
        }

        const user = await this.usersRepository.findByMail(payload.mail);

        if (!user) {
            throw new UnauthorizedException(
                `User with mail ${payload.mail} not found`,
            );
        }

        return user;
    }
}
