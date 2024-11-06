import { BaseEntity } from '@project/types';

export interface Repository<T extends BaseEntity> {
    findById(id: T['id']): Promise<T | null>;

    save(entity: T): Promise<void>;

    update(entity: T): Promise<void>;

    deleteById(id: T['id']): Promise<void>;
}
