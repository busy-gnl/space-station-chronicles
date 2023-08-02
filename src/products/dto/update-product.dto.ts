import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { CartLine } from '../../carts/entities/cartLine.entity';
import { PurchaseLine } from '../../purchases/entities/purchaseLine.entity';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  name: string;
  description: string;
  image: string;
  price: number;
  stock: number;
  category: string;
  purchaseLines: PurchaseLine[];
  cartLines: CartLine[];
}
