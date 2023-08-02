import { Injectable } from '@nestjs/common';
import { DatabaseService } from './database.service';

@Injectable()
export class AppService {
  constructor(private readonly databaseService: DatabaseService) {}

  async initDatabase(): Promise<void> {
    await this.databaseService.initializeDatabase();
    await this.databaseService.dropDatabase();
    await this.databaseService.synchronizeDatabase();
    await this.databaseService.fillDatabaseWithData();
    await this.databaseService.closeDatabase();
  }

  getHello(): string {
    return 'Hello World!';
  }
}
