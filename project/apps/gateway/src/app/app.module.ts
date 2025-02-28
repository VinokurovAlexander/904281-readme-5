import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { HttpModule } from '@nestjs/axios';
import { AppService } from './app.service';

@Module({
    imports: [
        HttpModule.register({
            timeout: 5000,
        }),
    ],
    providers: [AppService],
    controllers: [AppController],
})
export class AppModule {}
