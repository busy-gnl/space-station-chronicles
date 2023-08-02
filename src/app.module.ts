import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { Product } from './products/entities/product.entity';
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
import { Cart } from './carts/entities/cart.entity';
import { Purchase } from './purchases/entities/purchase.entity';
import { CartLine } from './carts/entities/cartLine.entity';
import { PurchaseLine } from './purchases/entities/purchaseLine.entity';
import { Mission } from './missions/entities/mission.entity';
import { IssModule } from './iss-modules/entities/issModule.entity';
import { Crew } from './crew/entities/crew.entity';

config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_DB,
      entities: [
        User,
        Product,
        Cart,
        Purchase,
        CartLine,
        PurchaseLine,
        Event,
        Mission,
        IssModule,
        Crew,
        __dirname + '/../**/*.entity{.ts,.js}',
      ],
      synchronize: true,
      autoLoadEntities: true,
    }),
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
