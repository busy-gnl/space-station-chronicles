import { Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { CreateCartLineDto } from './dto/create-cartLine.dto';
import { UpdateCartLineDto } from './dto/update-cartLine.dto';

@Injectable()
export class CartsService {
  create(createCartDto: CreateCartDto, createCartLineDto: CreateCartLineDto) {
    return 'This action adds a new cart';
  }

  findAll() {
    return `This action returns all carts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cart`;
  }

  update(
    id: number,
    updateCartDto: UpdateCartDto,
    updateCartLineDto: UpdateCartLineDto,
  ) {
    return `This action updates a #${id} cart`;
  }

  remove(id: number) {
    return `This action removes a #${id} cart`;
  }
}
