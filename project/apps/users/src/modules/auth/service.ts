import {
    ConflictException,
    HttpException,
    HttpStatus,
    Injectable,
    NotFoundException,
    UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto, LoginUserDto } from '../user/dto';
import { UsersRepository } from '../user/repository';
import { User } from '../user/user.entity';
import { AccessTokenPayload } from '../../types';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersRepository: UsersRepository,
        private readonly jwtService: JwtService,
    ) {}

    public async register(dto: CreateUserDto) {
        const { mail } = dto;
        const existUser = await this.usersRepository.findByMail(mail);

        if (existUser) {
            throw new ConflictException('User with this email exists');
        }

        const user = await new User(dto).init();

        return this.usersRepository.save(user);
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
            id: user.id,
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
}
