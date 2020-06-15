import { Module } from '@nestjs/common';
import { FiliersController } from './filiers.controller';
import { FiliersService } from './filiers.service';
import { Filiere } from './model/filier.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [UsersModule,TypeOrmModule.forFeature([Filiere])],
  controllers: [FiliersController],
  providers: [FiliersService]
})
export class FiliersModule {}
