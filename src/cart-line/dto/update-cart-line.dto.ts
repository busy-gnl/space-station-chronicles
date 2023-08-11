import { PartialType } from '@nestjs/mapped-types';
import { CreateCartLineDto } from './create-cart-line.dto';

export class UpdateCartLineDto extends PartialType(CreateCartLineDto) {
  product: number;
  quantity: number;
}
