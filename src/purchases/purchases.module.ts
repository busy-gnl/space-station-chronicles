import { Module } from '@nestjs/common';
import { PurchasesService } from './purchases.service';
import { PurchasesController } from './purchases.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Purchase } from './entities/purchase.entity';
import { PurchaseLine } from '../purchase-line/entities/purchaseLine.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Purchase, PurchaseLine])],
  controllers: [PurchasesController],
  providers: [PurchasesService],
})
export class PurchasesModule {}
