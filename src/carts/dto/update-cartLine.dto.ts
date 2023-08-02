import { PartialType } from '@nestjs/mapped-types';
import { CreateCartLineDto } from './create-cartLine.dto';

export class UpdateCartLineDto extends PartialType(CreateCartLineDto) {
  product: number;
  quantity: number;
}
