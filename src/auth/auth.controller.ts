import { Controller, UseGuards, Post, Request, Get, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { signUp, signIn } from './dto/types';
import { createUser } from 'src/users/model/user.dto';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) { }

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async signin(@Request() req) {
        return this.authService.login(req.user);
    }

    @Post('register')
    async signup(@Body() req: createUser) {
        return this.authService.signup(req);
    }
}
