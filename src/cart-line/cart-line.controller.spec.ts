import { Test, TestingModule } from '@nestjs/testing';
import { CartLineController } from './cart-line.controller';
import { CartLineService } from './cart-line.service';

describe('CartLineController', () => {
  let controller: CartLineController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CartLineController],
      providers: [CartLineService],
    }).compile();

    controller = module.get<CartLineController>(CartLineController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
