import { Controller, Get, Request, Post, Body, Put, Delete, Param } from '@nestjs/common';
import { CoursService } from './cours.service';
import { Cours } from './model/cours.entity';
import { Crud } from '@nestjsx/crud';
@Crud({
    model:{type:Cours}
})
@Controller('cours')
export class CoursController {
    constructor(private service: CoursService) { }
}
