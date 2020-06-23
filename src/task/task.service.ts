import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './model/task.entity';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

@Injectable()
export class TaskService  extends TypeOrmCrudService<Task>{
    constructor(
        @InjectRepository(Task)
        private tasksRepository: Repository<Task>,
    ) { super(tasksRepository)}
}
