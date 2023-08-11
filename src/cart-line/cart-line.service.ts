import { Injectable } from '@nestjs/common';
import { CreateCartLineDto } from './dto/create-cart-line.dto';
import { UpdateCartLineDto } from './dto/update-cart-line.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CartLine } from './entities/cartLine.entity';

@Injectable()
export class CartLineService {
  constructor(
    @InjectRepository(CartLine)
    private cartLineRepository: Repository<CartLine>,
  ) {}

  async findAll() {
    return await this.cartLineRepository.find();
  }

  async findOne(id: number) {
    return await this.cartLineRepository.findOneBy({ id });
  }

  async create(createCartLineDto: CreateCartLineDto) {
    return await this.cartLineRepository.save(createCartLineDto);
  }

  async update(id: number, updateCartLineDto: UpdateCartLineDto) {
    return await this.cartLineRepository.update(id, updateCartLineDto);
  }

  async remove(id: number) {
    return await this.cartLineRepository.delete(id);
  }
}
