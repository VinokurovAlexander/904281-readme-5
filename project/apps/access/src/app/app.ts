import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { jwtConfig } from './config';

@Module({
    imports: [
        ConfigModule.forRoot({
            cache: true,
            load: [jwtConfig],
            isGlobal: true,
        }),
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
