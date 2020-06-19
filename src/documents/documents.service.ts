import { Injectable } from '@nestjs/common';
import { Document} from "./model/document.entity"
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class DocumentsService extends TypeOrmCrudService<Document>  {
    constructor(
        @InjectRepository(Document)
        private documentRepository: Repository<Document>,
    ) {super(documentRepository)}
}
