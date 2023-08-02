import { DataSource } from 'typeorm';
import { databaseConfig } from './database.config';

export default new DataSource({
  ...databaseConfig,
  migrations: [__dirname + '/../migrations/*.ts'],
  migrationsTableName: 'migrations_table',
});
