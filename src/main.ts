import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';
import { AppService } from './app.service';

config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const appService = app.get(AppService);

  try {
    await appService.initDatabase();
    console.log(
      'Le remplissage de la base de données a été effectué avec succès.',
    );
  } catch (error) {
    console.error(
      'Une erreur est survenue lors du remplissage de la base de données :',
      error,
    );
  }

  await app.listen(3030);
}
bootstrap();
