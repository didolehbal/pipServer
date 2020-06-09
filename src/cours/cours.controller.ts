import { Controller, Get, Request, Post, Body, Put, Delete, Param } from '@nestjs/common';
import { CoursService } from './cours.service';

@Controller('cours')
export class CoursController {
    constructor(private coursService: CoursService) { }

    @Get('/')
    async cours(@Request() req) {
        return this.coursService.fetchAll();
    }
    
    @Post('/')
    async createCours(@Body() body) {
        console.log(body)
        return this.coursService.create({...body});
    }

    @Put('/')
    async updateCours(@Body() body) {
        console.log(body)
        return this.coursService.update({...body});
    }

    @Delete('/')
    async deleteCours(@Param() id) {
        return this.coursService.remove(id);
    }
}
