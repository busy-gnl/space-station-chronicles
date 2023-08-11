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
    try {
      await this.datasource.initialize();
    } catch (error) {
      console.error(
        "Une erreur est survenue lors de l'initialisation de la base de données :",
        error,
      );
    }
  }

  dropDatabase(): Promise<void> {
    try {
      return this.datasource.dropDatabase();
    } catch (error) {
      console.error(
        'Une erreur est survenue lors de la suppression de la base de données :',
        error,
      );
    }
  }

  synchronizeDatabase(): Promise<void> {
    try {
      return this.datasource.synchronize();
    } catch (error) {
      console.error(
        'Une erreur est survenue lors de la synchronisation de la base de données :',
        error,
      );
    }
  }

  async showMigrations(): Promise<void> {
    try {
      const migrations = await this.datasource.showMigrations();
      console.log('Les migrations sont :', migrations);
    } catch (error) {
      console.error(
        "Une erreur est survenue lors de l'affichage des migrations :",
        error,
        `L'erreur est : ${error}`,
        `L'erreur est : ${JSON.stringify(error)}`,
      );
    }
  }

  async runMigrations(): Promise<void> {
    try {
      await this.datasource.runMigrations();
      console.log('migrations exécutées');
    } catch (error) {
      console.error(
        "Une erreur est survenue lors de l'exécution des migrations :",
        error,
      );
    }
  }

  async fillDatabaseWithData(): Promise<void> {
    try {
      const scriptPath = 'src/database.sql';
      await this.runSqlScript(scriptPath);
    } catch (error) {
      console.error(
        'Une erreur est survenue lors du remplissage de la base de données :',
        error,
      );
    }
  }

  async closeDatabase(): Promise<void> {
    try {
      await this.datasource.destroy();
    } catch (error) {
      console.error(
        'Une erreur est survenue lors de la fermeture de la base de données :',
        error,
      );
    }
  }
}
