import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event } from './entities/event.entity';
// import { CreateEventDto } from './dto/create-event.dto';
// import { UpdateEventDto } from './dto/update-event.dto';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Event)
    private eventRepository: Repository<Event>,
  ) {}

  async findAll(): Promise<Event[]> {
    return await this.eventRepository.find();
  }

  async findOneById(id: number): Promise<Event | null> {
    return await this.eventRepository.findOneBy({ id });
  }

  // create(createEventDto: CreateEventDto) {
  //   return 'This action adds a new event';
  // }
  // update(id: number, updateEventDto: UpdateEventDto) {
  //   return `This action updates a #${id} event`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} event`;
  // }
}
