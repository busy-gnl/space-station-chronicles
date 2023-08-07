import {
  Controller,
  Get,
  Param,
  // Post,
  // Body,
  // Delete,
  // Put,
} from '@nestjs/common';
import { MissionsService } from './missions.service';
// import { CreateMissionDto } from './dto/create-mission.dto';
// import { UpdateMissionDto } from './dto/update-mission.dto';

@Controller('missions')
export class MissionsController {
  constructor(private readonly missionsService: MissionsService) {}

  @Get()
  findAll() {
    return this.missionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.missionsService.findOneById(+id);
  }

  // @Post()
  // create(@Body() createMissionDto: CreateMissionDto) {
  //   return this.missionsService.create(createMissionDto);
  // }

  // @Put(':id')
  // update(@Param('id') id: string, @Body() updateMissionDto: UpdateMissionDto) {
  //   return this.missionsService.update(+id, updateMissionDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.missionsService.remove(+id);
  // }
}
