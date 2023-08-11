import { Test, TestingModule } from '@nestjs/testing';
import { CartLineService } from './cart-line.service';

describe('CartLineService', () => {
  let service: CartLineService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CartLineService],
    }).compile();

    service = module.get<CartLineService>(CartLineService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
