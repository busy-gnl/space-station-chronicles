import { Module } from '@nestjs/common';
import { PurchaseLineService } from './purchase-line.service';
import { PurchaseLineController } from './purchase-line.controller';
import { PurchaseLine } from './entities/purchaseLine.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PurchaseLine])],
  controllers: [PurchaseLineController],
  providers: [PurchaseLineService],
})
export class PurchaseLineModule {}
