import { Purchase } from '../../purchases/entities/purchase.entity';
import { Cart } from '../../carts/entities/cart.entity';

export class CreateUserDto {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  hashedPassword: string;
  address: string;
  phoneNumber: string;
  role: string;
  cart: Cart;
  purchases: Purchase[];
  isActive: boolean;
}
