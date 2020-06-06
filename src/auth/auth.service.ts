import { Injectable, HttpException, HttpStatus, ParseUUIDPipe } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { signUp } from "./dto/types"
import { User } from 'src/users/model/user.entity';
import { compareSync,hashSync, genSaltSync } from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) { }

  async validateUserCredentials(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findByUsername(username);
    if (user) {
      if(compareSync(pass, user.password)){
        const { password, ...result } = user;
        return result;
      }
    }
    return null;
  }

  async validateTokenTime(userId: number, time: Date): Promise<any> {
    const user = await this.usersService.findOne(userId);
    if (user && user.lastLogin.getTime() === time.getTime()) {
      return user;
    }
    return null;
  }

  async login(user: any) {
    const logintime = new Date
    const payload = { username: user.username, userId: user.id, lastLogin: logintime };
    await this.usersService.setLoginTime(user.id, logintime)
    return {
      access_token: this.jwtService.sign(payload),
    };
  }


  signup(payload: signUp): Promise<User> {
    if (payload.password != payload.password_confirmation)
      throw new HttpException("passwords do not match", HttpStatus.FORBIDDEN)
    const salt = genSaltSync(10);
    return this.usersService.create({...payload,password:hashSync(payload.password,salt)})
  }

}