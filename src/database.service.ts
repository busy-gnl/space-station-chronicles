import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import * as fs from 'fs';

@Injectable()
export class DatabaseService {
  constructor(@InjectConnection() private readonly connection: Connection) {}

  async runSqlScript(scriptPath: string): Promise<void> {
    const sql = fs.readFileSync(scriptPath).toString();
    await this.connection.query(sql);
  }
}
