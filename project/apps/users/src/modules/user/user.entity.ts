import { compare, genSalt, hash } from 'bcrypt';
import { BaseUser } from '@project/types';
import { SALT_ROUNDS } from './constants';
import { StorableEntity } from '@project/types';

type UserIdType = BaseUser['id'];

export class User implements StorableEntity<BaseUser> {
    //TODO id тут недоступен
    public id: string;
    public mail: string;
    public firstname: string;
    public lastname: string;
    public password: string;
    public registerDate: number;
    public photo: string;
    public following: UserIdType[];
    public subscribers: UserIdType[];

    constructor(data) {
        this.populate(data);
    }

    public populate(data) {
        this.id = data._id;
        this.mail = data.mail;
        this.firstname = data.firstname;
        this.lastname = data.lastname;
        this.password = data.password;
        this.photo = data.photo;
        this.following = [];
        this.subscribers = [];
    }

    public toPOJO() {
        return {
            id: this.id,
            mail: this.mail,
            firstname: this.firstname,
            lastname: this.lastname,
            password: this.password,
            registerDate: this.registerDate,
            photo: this.photo,
            following: this.following,
            subscribers: this.subscribers,
        };
    }

    public async comparePassword(password: string) {
        return compare(password, this.password);
    }

    private async getPasswordHash(password: string) {
        const salt = await genSalt(SALT_ROUNDS);

        return await hash(password, salt);
    }

    public async init() {
        const passwordHash = await this.getPasswordHash(this.password);
        const registerDate = Date.now();

        this.password = passwordHash;
        this.registerDate = registerDate;

        return this;
    }
}
