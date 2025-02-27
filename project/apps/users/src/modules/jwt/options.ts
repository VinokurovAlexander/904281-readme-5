import { ConfigService } from '@nestjs/config';
import { JwtModuleOptions } from '@nestjs/jwt';

export const getJwtOptions = (
    configService: ConfigService,
): JwtModuleOptions => ({
    secret: configService.getOrThrow('jwt.secret'),
    signOptions: {
        expiresIn: configService.getOrThrow('jwt.expiresIn'),
        algorithm: 'HS256',
    },
});
