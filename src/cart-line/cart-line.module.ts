import { Module } from '@nestjs/common';
import { CartLineService } from './cart-line.service';
import { CartLineController } from './cart-line.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartLine } from './entities/cartLine.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CartLine])],
  controllers: [CartLineController],
  providers: [CartLineService],
})
export class CartLineModule {}
