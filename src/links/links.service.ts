import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Link } from './model/link.entity';
import { Repository } from 'typeorm';
import {TypeOrmCrudService} from "@nestjsx/crud-typeorm"
@Injectable()
export class LinksService extends TypeOrmCrudService<Link> {
    constructor(
        @InjectRepository(Link)
        private linksRepository: Repository<Link>,
    ) { super(linksRepository)}
        //CRUD

    
}
