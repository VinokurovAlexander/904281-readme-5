import { BaseEntity } from './entity.intreface';

type IdType = BaseEntity['id'];

export interface BaseUser extends BaseEntity {
    mail: string;
    firstname: string;
    lastname: string;
    password: string;
    photo?: string;
    registerDate: number;
    following: IdType[];
    subscribers: IdType[];
}
