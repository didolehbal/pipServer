import { Controller } from '@nestjs/common';
import { Solution } from './model/solution.entity';
import { Crud } from '@nestjsx/crud';
import { SolutionsService } from './solution.service';

@Crud({
    model:{type:Solution},
    query:{
        join:{
            cours:{
                eager:true
            },
            user:{
                eager:true
            }
        }
    },
})
@Controller('solutions')
export class SolutionsController {
    constructor(public service:SolutionsService){}
}
