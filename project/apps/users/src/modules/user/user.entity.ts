import { compare, genSalt, hash } from 'bcrypt';
import { BaseUser, StorableEntity } from '@project/types';
import { SALT_ROUNDS } from './constants';
import { UserDto } from './dto/create';
import { UserRdo } from './rdo';

type UserIdType = BaseUser['id'];

class UserWithPassword {
    public password: string;

    public async comparePassword(password: string) {
        return compare(password, this.password);
    }

    protected async getPasswordHash(password: string) {
        const salt = await genSalt(SALT_ROUNDS);

        return await hash(password, salt);
    }
}

export class RegisteringUser
    extends UserWithPassword
    implements StorableEntity<UserDto>
{
    public mail: string;
    public firstname: string;
    public lastname: string;

    constructor(data: UserDto) {
        super();

        this.mail = data.mail;
        this.firstname = data.firstname;
        this.lastname = data.lastname;
    }

    public async init(password: string) {
        this.password = await this.getPasswordHash(password);

        return this;
    }

    public toPOJO() {
        return {
            mail: this.mail,
            firstname: this.firstname,
            lastname: this.lastname,
            password: this.password,
        };
    }
}

export class User extends UserWithPassword implements StorableEntity<BaseUser> {
    public id: string;
    public mail: string;
    public firstname: string;
    public lastname: string;
    public photo: string | undefined;
    public following: UserIdType[];
    public subscribers: UserIdType[];
    public password: string;

    constructor(data: UserRdo) {
        super();

        this.populate(data);
    }

    public populate(data: UserRdo) {
        this.id = data.id;
        this.mail = data.mail;
        this.firstname = data.firstname;
        this.lastname = data.lastname;
        this.photo = data.photo;
        this.password = data.password;
        this.following = [];
        this.subscribers = [];
    }

    public toPOJO() {
        return {
            id: this.id,
            mail: this.mail,
            firstname: this.firstname,
            lastname: this.lastname,
            photo: this.photo,
            following: this.following,
            subscribers: this.subscribers,
            password: this.password,
        };
    }
}
