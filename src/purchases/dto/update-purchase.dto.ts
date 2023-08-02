import { PartialType } from '@nestjs/mapped-types';
import { CreatePurchaseDto } from './create-purchase.dto';
import { PurchaseLine } from '../entities/purchaseLine.entity';

export class UpdatePurchaseDto extends PartialType(CreatePurchaseDto) {
  status: string;
  date: string;
  total: number;
  purchaseLines: PurchaseLine[];
}
