import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Mission } from './entities/mission.entity';
// import { CreateMissionDto } from './dto/create-mission.dto';
// import { UpdateMissionDto } from './dto/update-mission.dto';

@Injectable()
export class MissionsService {
  constructor(
    @InjectRepository(Mission)
    private missionRepository: Repository<Mission>,
  ) {}

  async findAll(): Promise<Mission[]> {
    return await this.missionRepository.find();
  }

  async findOneById(id: number): Promise<Mission | null> {
    return await this.missionRepository.findOneBy({ id });
  }

  // create(createMissionDto: CreateMissionDto) {
  //   return 'This action adds a new mission';
  // }

  // update(id: number, updateMissionDto: UpdateMissionDto) {
  //   return `This action updates a #${id} mission`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} mission`;
  // }
}
