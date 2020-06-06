import { Module } from '@nestjs/common';
import { CoursController } from './cours.controller';
import { CoursService } from './cours.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cours } from './model/cours.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cours])],
  controllers: [CoursController],
  providers: [CoursService]
})
export class CoursModule {}
