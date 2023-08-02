import { CartLine } from '../../carts/entities/cartLine.entity';
import { PurchaseLine } from '../../purchases/entities/purchaseLine.entity';

export class CreateProductDto {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  stock: number;
  category: string;
  purchaseLines: PurchaseLine[];
  cartLines: CartLine[];
}
