import { BaseEntity } from './entity.intreface';

type IdType = BaseEntity['id'];

export interface BaseUser extends BaseEntity {
    mail: string;
    firstname: string;
    lastname: string;
    photo?: string;
    following: IdType[];
    subscribers: IdType[];
    password: string;
    isConfirmed: boolean;
}

export interface User extends BaseUser {
    id: string;
}
