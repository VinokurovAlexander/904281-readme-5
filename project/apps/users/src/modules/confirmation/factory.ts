import { Confirmation, ConfirmationEntity } from './entity';

export class ConfirmationFactory {
    create(data: Confirmation) {
        const entity = new ConfirmationEntity(data.userId);

        entity.id = data.id;
        entity.expiresIn = data.expiresIn;
        entity.token = data.token;

        return entity;
    }
}
