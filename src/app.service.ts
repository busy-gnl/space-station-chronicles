import { Injectable } from '@nestjs/common';
import { DatabaseService } from './database.service';

@Injectable()
export class AppService {
  constructor(private readonly databaseService: DatabaseService) {}

  async fillDatabaseWithData(): Promise<void> {
    const scriptPath = './database.sql';
    await this.databaseService.runSqlScript(scriptPath);
  }

  getHello(): string {
    return 'Hello World!';
  }
}
