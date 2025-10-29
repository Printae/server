import {
  DATABASE_HOST,
  DATABASE_NAME,
  DATABASE_PASSWORD,
  DATABASE_PORT,
  DATABASE_TYPE,
  DATABASE_USERNAME,
} from 'src/config';
import { DataSource } from 'typeorm';
import { NodeEntity } from './entities/Node';

const Entities = [NodeEntity];

export const Database = new DataSource({
  type: DATABASE_TYPE,
  host: DATABASE_HOST,
  port: DATABASE_PORT,
  username: DATABASE_USERNAME,
  password: DATABASE_PASSWORD,
  database: DATABASE_NAME,
  synchronize: true,
  entities: Entities,
});

export const Repositories = {
  node: Database.getRepository(NodeEntity),
};
