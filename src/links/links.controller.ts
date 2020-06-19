import { Controller } from '@nestjs/common';
import {Crud} from "@nestjsx/crud"
import { Link } from './model/link.entity';
import { LinksService } from './links.service';

@Crud({
    model:{type:Link},
    query:{
        join:{
            cours:{
                eager:true
            }
        }
    },
})
@Controller('links')
export class LinksController {
    constructor(public service:LinksService){}
}
