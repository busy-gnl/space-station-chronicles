import {
  IsString,
  IsNotEmpty,
  MinLength,
  MaxLength,
  IsOptionnal,
  IsDefined,
  IsEnum,
  IsNumber,
  IsInt,
} from 'class-validator';

import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { CartLine } from '../../carts/entities/cartLine.entity';
import { PurchaseLine } from '../../purchases/entities/purchaseLine.entity';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(50)
  name: string;

  @IsString()
  @IsOptionnal()
  @MinLength(20)
  description: string;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @MaxLength(255)
  image: string;

  @IsNumber()
  @IsDefined()
  @IsNotEmpty()
  price: number;

  @IsNumber()
  @IsInt()
  stock: number;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @MaxLength(50)
  category: string;

  purchaseLines: PurchaseLine[];

  cartLines: CartLine[];
}
