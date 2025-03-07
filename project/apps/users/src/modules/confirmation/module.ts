import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfirmationModel, ConfirmationSchema } from './model';
import { ConfirmationController } from './controller';
import { ConfirmationRepository } from './repository';
import { ConfirmationFactory } from './factory';
import { ConfirmationService } from './service';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: ConfirmationModel.name, schema: ConfirmationSchema },
        ]),
    ],
    providers: [
        ConfirmationRepository,
        ConfirmationFactory,
        ConfirmationService,
    ],
    controllers: [ConfirmationController],
})
export class ConfirmationModule {}
