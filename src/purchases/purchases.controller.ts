import { UpdatePurchaseLineDto } from './dto/update-purchaseLine.dto';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PurchasesService } from './purchases.service';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import { CreatePurchaseLineDto } from './dto/create-purchaseLine.dto';

@Controller('purchases')
export class PurchasesController {
  constructor(private readonly purchasesService: PurchasesService) {}

  @Post()
  create(
    @Body() createPurchaseDto: CreatePurchaseDto,
    createPurchaseLineDto: CreatePurchaseLineDto,
  ) {
    return this.purchasesService.create(
      createPurchaseDto,
      createPurchaseLineDto,
    );
  }

  @Get()
  findAll() {
    return this.purchasesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.purchasesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePurchaseDto: UpdatePurchaseDto,
    updatePurchaseLineDto: UpdatePurchaseLineDto,
  ) {
    return this.purchasesService.update(
      +id,
      updatePurchaseDto,
      updatePurchaseLineDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.purchasesService.remove(+id);
  }
}
