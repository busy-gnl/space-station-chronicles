import { User } from '../../users/entities/user.entity';
import { CartLine } from '../../cart-line/entities/cartLine.entity';

export class CreateCartDto {
  id: number;
  cartLines: CartLine[];
  user: User;
}
