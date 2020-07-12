import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Timestamp } from 'typeorm';
import { User } from './model/user.entity';
import { createUser } from './model/user.dto';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

@Injectable()
export class UsersService extends TypeOrmCrudService<User> {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {super(usersRepository) }
 

  findByUsername(username: string): Promise<User> {
    return this.usersRepository.findOne({ username })
  }

  async create(payload: createUser) {
    const user = await this.findByUsername(payload.username)
    if (user)
      throw new HttpException("username already exists", HttpStatus.FORBIDDEN)
    return this.usersRepository.save({...payload});
  }

  
  async setLoginTime(userId: number, time: Date) {
    await this.usersRepository.update({ id: userId }, { lastLogin: time })
  }

}