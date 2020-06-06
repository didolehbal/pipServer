import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Cours } from './model/cours.entity';

@Injectable()
export class CoursService {
    constructor(
        @InjectRepository(Cours)
        private coursRepository: Repository<Cours>,
      ) { }
    
    fetchAll(){
        return this.coursRepository.find()
    }
}
