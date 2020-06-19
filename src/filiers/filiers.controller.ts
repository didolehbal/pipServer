import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { FiliersService } from './filiers.service';
import { Filiere } from './model/filier.entity';
import { Crud, CrudController } from '@nestjsx/crud';
import { AddEtudiant } from './model/filiers.dto';

@Crud({
    model:{type:Filiere},
    query: {
        join: {
          etudiants: {
            eager: true,
          }
        }
    }
})
@Controller('filiers')
export class FiliersController implements CrudController<Filiere>{
    constructor(public service:FiliersService){}

    @Get("/:id/etudiants")
    etudiants(@Param("id") id){
        return this.service.etudiants(id)
    }
    @Post("/:id/etudiants")
    addEtudiants(@Body() payload : AddEtudiant){
        return this.service.addEtudiant(payload)
    }
}
