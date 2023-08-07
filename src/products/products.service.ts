import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  async findAll(): Promise<Product[]> {
    return await this.productsRepository.find();
  }

  findOneById(id: number): Promise<Product | null> {
    return this.productsRepository.findOneBy({ id });
  }

  async create(createProductDto: CreateProductDto) {
    return await this.productsRepository.save(createProductDto);
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    return await this.productsRepository.save({ id, ...updateProductDto });
  }

  async remove(id: number): Promise<void> {
    await this.productsRepository.delete(id);
  }
}
