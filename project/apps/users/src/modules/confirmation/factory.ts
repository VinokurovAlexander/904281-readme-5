import { Confirmation, ConfirmationEntity } from './entity';

export class ConfirmationFactory {
    create(data: any) {
        return new ConfirmationEntity(data);
    }
}
