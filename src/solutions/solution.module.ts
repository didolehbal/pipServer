import { Module } from '@nestjs/common';
import { SolutionsController } from './solution.controller';
import { SolutionsService } from './solution.service';
import { Solution } from './model/solution.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  
  imports: [TypeOrmModule.forFeature([Solution])],
  controllers: [SolutionsController],
  providers: [SolutionsService]
})
export class SolutionsModule {}
