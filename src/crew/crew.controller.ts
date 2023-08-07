import {
  Controller,
  Get,
  Param,
  // Body,
  // Post,
  // Put,
  // Delete,
} from '@nestjs/common';
import { CrewService } from './crew.service';
// import { CreateCrewDto } from './dto/create-crew.dto';
// import { UpdateCrewDto } from './dto/update-crew.dto';

@Controller('crew')
export class CrewController {
  constructor(private readonly crewService: CrewService) {}

  @Get()
  findAll() {
    return this.crewService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.crewService.findOneById(+id);
  }

  // @Post()
  // create(@Body() createCrewDto: CreateCrewDto) {
  //   return this.crewService.create(createCrewDto);
  // }

  // @Put(':id')
  // update(@Param('id') id: string, @Body() updateCrewDto: UpdateCrewDto) {
  //   return this.crewService.update(+id, updateCrewDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.crewService.remove(+id);
  // }
}
