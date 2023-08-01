import { Module } from '@nestjs/common';
import { CartsService } from './carts.service';
import { CartsController } from './carts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cart } from './entities/cart.entity';
import { CartLine } from './entities/cartLine.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cart, CartLine])],
  controllers: [CartsController],
  providers: [CartsService],
})
export class CartsModule {}
