import { StorableEntity } from '@project/types';
import { randomUUID } from 'node:crypto';

export interface Confirmation {
    id: string;
    userId: string;
    expiresIn: Date;
    token: string;
}

export class ConfirmationEntity implements StorableEntity<Confirmation> {
    public userId: string;
    public expiresIn: Date;
    public token: string;
    public id: string;

    constructor(userId: string) {
        this.userId = userId;
    }

    init() {
        const { token, expiresIn } = this.createToken();

        this.token = token;
        this.expiresIn = expiresIn;

        return this;
    }

    toPOJO() {
        return {
            id: this.id,
            userId: this.userId,
            expiresIn: this.expiresIn,
            token: this.token,
        };
    }

    private createToken() {
        const token = randomUUID();
        const expiresIn = new Date(Date.now() + 1000 * 3600 * 24);

        return { token, expiresIn };
    }
}
