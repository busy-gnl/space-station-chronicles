import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Crew } from './entities/crew.entity';
// import { CreateCrewDto } from './dto/create-crew.dto';
// import { UpdateCrewDto } from './dto/update-crew.dto';

@Injectable()
export class CrewService {
  constructor(
    @InjectRepository(Crew)
    private crewRepository: Repository<Crew>,
  ) {}

  async findAll(): Promise<Crew[]> {
    return await this.crewRepository.find();
  }

  async findOneById(id: number): Promise<Crew | null> {
    return await this.crewRepository.findOneBy({ id });
  }

  // create(createCrewDto: CreateCrewDto) {
  //   return 'This action adds a new crew';
  // }
  // update(id: number, updateCrewDto: UpdateCrewDto) {
  //   return `This action updates a #${id} crew`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} crew`;
  // }
}
