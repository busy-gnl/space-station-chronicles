import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { IssModulesService } from './issModules.service';
import { CreateIssModuleDto } from './dto/create-iss-module.dto';
import { UpdateIssModuleDto } from './dto/update-iss-module.dto';

@Controller('modules')
export class IssModulesController {
  constructor(private readonly modulesService: IssModulesService) {}

  @Post()
  create(@Body() createModuleDto: CreateIssModuleDto) {
    return this.modulesService.create(createModuleDto);
  }

  @Get()
  findAll() {
    return this.modulesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.modulesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateModuleDto: UpdateIssModuleDto) {
    return this.modulesService.update(+id, updateModuleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.modulesService.remove(+id);
  }
}
