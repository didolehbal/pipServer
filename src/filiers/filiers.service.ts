import { Injectable } from '@nestjs/common';
import {TypeOrmCrudService} from "@nestjsx/crud-typeorm"
import { Filiere } from './model/filier.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersService } from 'src/users/users.service';
import { AddEtudiant } from './model/filiers.dto';
@Injectable()
export class FiliersService extends TypeOrmCrudService<Filiere> {
    constructor(
        @InjectRepository(Filiere)
        private filiereRepository: Repository<Filiere>,
        private usersService: UsersService,
    ) { super(filiereRepository)}


    async etudiants(id:number){
        const filiere = await this.filiereRepository.findOneOrFail(id,{relations:["etudiants"]})
        return filiere.etudiants || []
    }

    async addEtudiant(payload: AddEtudiant){
        const filiere = await this.filiereRepository.findOne(payload.filierId)
        const etud = await this.usersService.findOne(payload.userId)
        console.log(filiere.etudiants,etud)
        filiere.etudiants = [...(filiere.etudiants||[]),etud]
        return  await this.filiereRepository.save(filiere)
    }
}
