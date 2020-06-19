import { Controller, Get, Request, Post, Body, Put, Delete, Param } from '@nestjs/common';
import { CoursService } from './cours.service';
import { Cours } from './model/cours.entity';
import { Crud } from '@nestjsx/crud';
@Crud({
    model:{type:Cours},
    query: {
        join: {
            filiers: {
            eager: true,
          },
          links:{
              eager:true
          },
          documents:{
              eager:true
          }
        }
      }
})
@Controller('cours')
export class CoursController {
    constructor(private service: CoursService) { }
}
