import { Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cart } from './entities/cart.entity';

@Injectable()
export class CartsService {
  constructor(
    @InjectRepository(Cart)
    private cartsRepository: Repository<Cart>,
  ) {}

  async findAll() {
    return await this.cartsRepository.find();
  }

  async findOne(id: number) {
    return await this.cartsRepository.findOneBy({ id });
  }

  async create(createCartDto: CreateCartDto) {
    return await this.cartsRepository.save(createCartDto);
  }

  async update(id: number, updateCartDto: UpdateCartDto) {
    return await this.cartsRepository.update(id, updateCartDto);
  }

  async remove(id: number) {
    return await this.cartsRepository.delete(id);
  }
}
