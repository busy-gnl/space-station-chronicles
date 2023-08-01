import { IssModule } from './entities/issModule.entity';
import { IssModulesService } from './issModules.service';
import { IssModulesController } from './issModules.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([IssModule])],
  controllers: [IssModulesController],
  providers: [IssModulesService],
})
export class IssModulesModule {}
