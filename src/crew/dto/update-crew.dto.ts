import { PartialType } from '@nestjs/mapped-types';
import { CreateCrewDto } from './create-crew.dto';

export class UpdateCrewDto extends PartialType(CreateCrewDto) {
  name: string;
  age: number;
  nation: string;
  description: string;
  picture: string;
}
