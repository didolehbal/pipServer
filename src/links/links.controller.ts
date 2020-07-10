import { Controller } from '@nestjs/common';
import {Crud, CrudController} from "@nestjsx/crud"
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
export class LinksController implements CrudController<Link> {
    constructor(public service:LinksService){}
}
