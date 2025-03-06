import { EntityFactory } from '@project/types';
import { User } from './user.entity';
import { UserRdo } from './rdo';

export class UserFactory implements EntityFactory<User> {
    create(data: UserRdo): User {
        return new User(data);
    }
}
