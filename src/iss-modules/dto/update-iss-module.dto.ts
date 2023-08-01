import { PartialType } from '@nestjs/mapped-types';
import { CreateIssModuleDto } from './create-iss-module.dto';

export class UpdateIssModuleDto extends PartialType(CreateIssModuleDto) {}
