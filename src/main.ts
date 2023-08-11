import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';
import { AppService } from './app.service';

config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const appService = app.get(AppService);
  const port = process.env.PORT || 3000;

  try {
    await appService.initDatabase();
    // console.log('BDD=>', process.env);
    // console.log(
    //   'Le remplissage de la base de données a été effectué avec succès.',
    // );
  } catch (error) {
    console.error('Initialisation de la base de données impossible :', error);
  }

  try {
    await app.listen(port);
    console.log('Le serveur est lancé sur le port :', port);
  } catch (error) {
    console.error(
      'Une erreur est survenue lors du lancement du serveur :',
      error,
    );
  }
}
bootstrap();
