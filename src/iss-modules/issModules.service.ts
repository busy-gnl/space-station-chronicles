import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IssModule } from './entities/issModule.entity';
// import { CreateIssModuleDto } from './dto/create-iss-module.dto';
// import { UpdateIssModuleDto } from './dto/update-iss-module.dto';

@Injectable()
export class IssModulesService {
  constructor(
    @InjectRepository(IssModule)
    private issModuleRepository: Repository<IssModule>,
  ) {}

  async findAll(): Promise<IssModule[]> {
    return await this.issModuleRepository.find();
  }

  async findOneById(id: number): Promise<IssModule | null> {
    return await this.issModuleRepository.findOneBy({ id });
  }

  // create(createModuleDto: CreateIssModuleDto) {
  //   return 'This action adds a new module';
  // }

  // update(id: number, updateModuleDto: UpdateIssModuleDto) {
  //   return `This action updates a #${id} module`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} module`;
  // }
}
