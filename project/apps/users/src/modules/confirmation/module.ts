import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfirmationModel, ConfirmationSchema } from './model';
import { ConfirmationController } from './controller';
import { ConfirmationRepository } from './repository';
import { ConfirmationFactory } from './factory';
import { ConfirmationService } from './service';
import { UserModule } from '../user/module';
import { MailModule } from '../mailer/module';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: ConfirmationModel.name, schema: ConfirmationSchema },
        ]),
        UserModule,
        MailModule,
    ],
    providers: [
        ConfirmationRepository,
        ConfirmationFactory,
        ConfirmationService,
    ],
    controllers: [ConfirmationController],
    exports: [ConfirmationService],
})
export class ConfirmationModule {}
