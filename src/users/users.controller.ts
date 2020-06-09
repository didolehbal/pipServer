import { Controller, Get, Body, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }
    @Get("/")
    users(){
        return this.usersService.findAll();
    }

    @Post("/")
    createUser(@Body() createUser){
        return this.usersService.create(createUser);
    }

    /*@Post("/")
    createUser(@Body() createUser){
        return this.usersService.create(createUser);
    }*/
}
