import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { CartsModule } from './carts/carts.module';
import { IssModulesModule } from './iss-modules/issModules.module';
import { CrewModule } from './crew/crew.module';
import { PurchasesModule } from './purchases/purchases.module';
import { EventsModule } from './events/events.module';
import { MissionsModule } from './missions/missions.module';
import { ConfigModule } from '@nestjs/config';
import { databaseConfig } from './config/database.config';
import { DatabaseService } from './database.service';

config();

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   ...databaseConfig,
    //   autoLoadEntities: true,
    // }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: () => databaseConfig,
    }),
    UsersModule,
    ProductsModule,
    CartsModule,
    PurchasesModule,
    EventsModule,
    MissionsModule,
    IssModulesModule,
    CrewModule,
  ],
  controllers: [AppController],
  providers: [AppService, DatabaseService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
