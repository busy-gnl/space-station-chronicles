import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import * as fs from 'fs';

@Injectable()
export class DatabaseService {
  constructor(private readonly datasource: DataSource) {}

  async runSqlScript(scriptPath: string): Promise<void> {
    const sql = fs.readFileSync(scriptPath).toString();
    await this.datasource.query(sql);
  }

  async initializeDatabase(): Promise<void> {
    await this.datasource.initialize();
  }

  dropDatabase(): Promise<void> {
    return this.datasource.dropDatabase();
  }

  synchronizeDatabase(): Promise<void> {
    return this.datasource.synchronize();
  }

  async fillDatabaseWithData(): Promise<void> {
    const scriptPath = './database.sql';
    await this.runSqlScript(scriptPath);
  }

  async closeDatabase(): Promise<void> {
    await this.datasource.destroy();
  }
}
