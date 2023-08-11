import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CartLineService } from './cart-line.service';
import { CreateCartLineDto } from './dto/create-cart-line.dto';
import { UpdateCartLineDto } from './dto/update-cart-line.dto';

@Controller('cart-line')
export class CartLineController {
  constructor(private readonly cartLineService: CartLineService) {}

  @Post()
  create(@Body() createCartLineDto: CreateCartLineDto) {
    return this.cartLineService.create(createCartLineDto);
  }

  @Get()
  findAll() {
    return this.cartLineService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cartLineService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCartLineDto: UpdateCartLineDto,
  ) {
    return this.cartLineService.update(+id, updateCartLineDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cartLineService.remove(+id);
  }
}
