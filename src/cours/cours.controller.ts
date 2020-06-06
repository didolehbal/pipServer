import { Controller, Get, Request } from '@nestjs/common';
import { CoursService } from './cours.service';

@Controller('cours')
export class CoursController {
    constructor(private coursService: CoursService) { }

    @Get('/')
    async cours(@Request() req) {
        return this.coursService.fetchAll();
    }
}
