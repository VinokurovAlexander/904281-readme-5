import { BaseEntity } from './entity.intreface';

type IdType = BaseEntity['id'];

export interface BaseUser extends BaseEntity {
    mail: string;
    login: string;
    password: string;
    photo: string;
    registerDate: number;
    following: IdType[];
    subscribers: IdType[];
}
