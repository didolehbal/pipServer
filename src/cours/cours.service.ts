import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Cours } from './model/cours.entity';
import { CreateCours, UpdateCours } from './model/cours.dto';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

@Injectable()
export class CoursService extends TypeOrmCrudService<Cours>  {
    constructor(
        @InjectRepository(Cours)
        private coursRepository: Repository<Cours>,
    ) {super(coursRepository)}

    fetchAll() {
        return this.coursRepository.find()
    }

    fetchOne(id: number) {
        return this.coursRepository.findOne(id)
    }

    create(coursData: CreateCours) {
        return this.coursRepository.save({ ...coursData })
    }

    update(coursData: UpdateCours) {
        const { id, ...rest } = coursData
        return this.coursRepository.update(id, rest)
    }

    remove(id: number){
        return this.coursRepository.delete(id)
    }
}
