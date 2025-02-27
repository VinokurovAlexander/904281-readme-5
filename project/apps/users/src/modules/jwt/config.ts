import { IsString, validateOrReject } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { registerAs } from '@nestjs/config';

class JwiConfig {
    @IsString({ message: 'JWT secret is required' })
    public secret;

    @IsString({ message: 'JWT expires time is required' })
    public expiresIn;

    public async validate() {
        try {
            await validateOrReject(this);
        } catch (err) {
            console.log('Validate jwt config error', err);
            throw err;
        }
    }
}

const getJwtConfig = async () => {
    const config = plainToClass(JwiConfig, {
        secret: process.env.JWT_ACCESS_TOKEN_SECRET,
        expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRES_IN,
    });

    await config.validate();

    return config;
};

export const jwtConfig = registerAs('jwt', () => getJwtConfig());
