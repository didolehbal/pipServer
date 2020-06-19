import { Controller, Get, Body, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { Crud } from '@nestjsx/crud';
import { User } from './model/user.entity';
@Crud({model:{type:User, },
     query: {
    join: {
      filiere: {
        eager: true,
      }
    }
  }})
@Controller('users')
export class UsersController {
    constructor(private service: UsersService) { }
}
