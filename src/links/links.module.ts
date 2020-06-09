import { Module } from '@nestjs/common';
import { LinksService } from './links.service';
import { LinksController } from './links.controller';
import { Link } from './model/link.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Link])],
  providers: [LinksService],
  controllers: [LinksController]
})
export class LinksModule {}
