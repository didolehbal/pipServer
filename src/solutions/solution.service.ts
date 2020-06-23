import { Injectable } from '@nestjs/common';
import { Solution } from './model/solution.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SolutionsService extends TypeOrmCrudService<Solution>{
    constructor(
        @InjectRepository(Solution)
        private solutionsRepository: Repository<Solution>,
    ) { super(solutionsRepository)}
}
