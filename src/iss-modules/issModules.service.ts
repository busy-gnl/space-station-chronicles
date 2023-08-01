import { Injectable } from '@nestjs/common';
import { CreateIssModuleDto } from './dto/create-iss-module.dto';
import { UpdateIssModuleDto } from './dto/update-iss-module.dto';

@Injectable()
export class IssModulesService {
  create(createModuleDto: CreateIssModuleDto) {
    return 'This action adds a new module';
  }

  findAll() {
    return `This action returns all modules`;
  }

  findOne(id: number) {
    return `This action returns a #${id} module`;
  }

  update(id: number, updateModuleDto: UpdateIssModuleDto) {
    return `This action updates a #${id} module`;
  }

  remove(id: number) {
    return `This action removes a #${id} module`;
  }
}
