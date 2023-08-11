import {
  IsString,
  IsNotEmpty,
  MinLength,
  MaxLength,
  IsOptional,
  IsDefined,
  IsNumber,
  IsInt,
} from 'class-validator';

import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { CartLine } from '../../cart-line/entities/cartLine.entity';
import { PurchaseLine } from '../../purchase-line/entities/purchaseLine.entity';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(50)
  name: string;

  @IsString()
  @IsOptional()
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
