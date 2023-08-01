import { Test, TestingModule } from '@nestjs/testing';
import { IssModulesController } from './issModules.controller';
import { IssModulesService } from './issModules.service';

describe('ModulesController', () => {
  let controller: IssModulesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IssModulesController],
      providers: [IssModulesService],
    }).compile();

    controller = module.get<IssModulesController>(IssModulesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
