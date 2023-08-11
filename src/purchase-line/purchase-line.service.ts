import { Injectable } from '@nestjs/common';
import { CreatePurchaseLineDto } from './dto/create-purchase-line.dto';
import { UpdatePurchaseLineDto } from './dto/update-purchase-line.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PurchaseLine } from './entities/purchaseLine.entity';

@Injectable()
export class PurchaseLineService {
  constructor(
    @InjectRepository(PurchaseLine)
    private purchaseLineRepository: Repository<PurchaseLine>,
  ) {}

  async findAll() {
    return await this.purchaseLineRepository.find();
  }

  async findOne(id: number) {
    return await this.purchaseLineRepository.findOneBy({ id });
  }

  async create(createPurchaseLineDto: CreatePurchaseLineDto) {
    return await this.purchaseLineRepository.save(createPurchaseLineDto);
  }

  async update(id: number, updatePurchaseLineDto: UpdatePurchaseLineDto) {
    return await this.purchaseLineRepository.update(id, updatePurchaseLineDto);
  }

  async remove(id: number) {
    return await this.purchaseLineRepository.delete(id);
  }
}
