import { BasePostgresRepository } from '../../../../libs/repository/src/postgres';
import { Post } from '../types';

class PostsRepository extends BasePostgresRepository<, Post> {}
