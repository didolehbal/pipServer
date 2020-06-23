import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Task } from './model/task.entity';
import { TaskService } from './task.service';
@Crud({
    model:{type:Task},
    query:{
        join:{
            cours:{
                eager:true
            },
            documents:{
                eager:true
            }
        }
    },
})
@Controller('tasks')
export class TaskController {
    constructor(public service:TaskService){}
}
