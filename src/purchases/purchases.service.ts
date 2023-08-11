import { Injectable } from '@nestjs/common';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import { Purchase } from './entities/purchase.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class PurchasesService {
  constructor(
    @InjectRepository(Purchase)
    private purchasesRepository: Repository<Purchase>,
  ) {}

  async findAll() {
    return await this.purchasesRepository.find();
  }

  async findOne(id: number) {
    return await this.purchasesRepository.findOneBy({ id });
  }

  async create(createPurchaseDto: CreatePurchaseDto) {
    return await this.purchasesRepository.save(createPurchaseDto);
  }

  async update(id: number, updatePurchaseDto: UpdatePurchaseDto) {
    return await this.purchasesRepository.update(id, updatePurchaseDto);
  }

  async remove(id: number) {
    return await this.purchasesRepository.delete(id);
  }
}
