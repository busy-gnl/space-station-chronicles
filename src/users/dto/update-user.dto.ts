import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { Purchase } from '../../purchases/entities/purchase.entity';
import { Cart } from '../../carts/entities/cart.entity';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  firstName: string;
  lastName: string;
  email: string;
  hashedPassword: string;
  address: string;
  phoneNumber: string;
  cart: Cart;
  purchases: Purchase[];
}
