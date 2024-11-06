export interface BaseEntity {
    id: string;
}

export interface EntityFactory<Entity extends BaseEntity> {
    create(data: any): Entity;
}

export interface StorableEntity<Entity> extends BaseEntity {
    toPOJO(): Entity;
}
