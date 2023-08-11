import { PartialType } from '@nestjs/mapped-types';
import { CreateCartDto } from './create-cart.dto';
import { CartLine } from '../../cart-line/entities/cartLine.entity';

export class UpdateCartDto extends PartialType(CreateCartDto) {
  cartLines: CartLine[];
}
