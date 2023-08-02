import { PartialType } from '@nestjs/mapped-types';
import { CreatePurchaseLineDto } from './create-purchaseLine.dto';

export class UpdateLinePurchaseDto extends PartialType(CreatePurchaseLineDto) {
  product: number;
  quantity: number;
}
