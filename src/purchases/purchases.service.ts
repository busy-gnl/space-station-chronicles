import { Injectable } from '@nestjs/common';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import { CreatePurchaseLineDto } from './dto/create-purchaseLine.dto';
import { UpdatePurchaseLineDto } from './dto/update-purchaseLine.dto';
@Injectable()
export class PurchasesService {
  create(
    createPurchaseDto: CreatePurchaseDto,
    createPurchaseLineDto: CreatePurchaseLineDto,
  ) {
    return 'This action adds a new purchase';
  }

  findAll() {
    return `This action returns all purchases`;
  }

  findOne(id: number) {
    return `This action returns a #${id} purchase`;
  }

  update(
    id: number,
    updatePurchaseDto: UpdatePurchaseDto,
    updatePurchaseLineDto: UpdatePurchaseLineDto,
  ) {
    return `This action updates a #${id} purchase`;
  }

  remove(id: number) {
    return `This action removes a #${id} purchase`;
  }
}
