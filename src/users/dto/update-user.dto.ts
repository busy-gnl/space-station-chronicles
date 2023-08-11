import {
  IsString,
  IsEmail,
  IsNotEmpty,
  IsDefined,
  MinLength,
  MaxLength,
  IsOptional,
} from 'class-validator';

import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { Purchase } from '../../purchases/entities/purchase.entity';
import { Cart } from '../../carts/entities/cart.entity';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsString()
  @IsOptional()
  @MaxLength(50)
  firstName: string;

  @IsString()
  @IsOptional()
  @MaxLength(50)
  lastName: string;

  @IsEmail()
  @IsNotEmpty()
  @IsDefined()
  @MaxLength(50)
  email: string;

  @IsString()
  @IsNotEmpty()
  @IsDefined()
  @MinLength(8)
  @MaxLength(20)
  hashedPassword: string;

  @IsString()
  @IsOptional()
  @MinLength(20)
  @MaxLength(255)
  address: string;

  @IsString()
  @IsOptional()
  @MinLength(10)
  @MaxLength(10)
  phoneNumber: string;

  @IsOptional()
  cart: Cart;

  @IsOptional()
  purchases: Purchase[];

  @IsOptional()
  isActive: boolean;
}
