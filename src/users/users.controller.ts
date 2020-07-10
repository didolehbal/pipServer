import { Controller, Get, Body, Request, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { Crud } from '@nestjsx/crud';
import { User } from './model/user.entity';
import { AuthGuard } from '@nestjs/passport';
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
    constructor(private service: UsersService) { 
    }
    @UseGuards(AuthGuard('jwt'))
    @Get('profile')
    async profile(@Request() req) {
        return req.user
    }
}
