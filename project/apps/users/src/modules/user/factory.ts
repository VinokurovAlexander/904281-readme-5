import { EntityFactory } from '@project/types';
import { User } from './user.entity';

export class UserFactory implements EntityFactory<User> {
    create(data: any): User {
        return new User(data);
    }
}
