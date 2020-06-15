import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Timestamp } from 'typeorm';
import { User } from './model/user.entity';
import { createUser } from './model/user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) { }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.usersRepository.findOneOrFail(id);
  }

  findByUsername(username: string): Promise<User> {
    return this.usersRepository.findOne({ username })
  }

  async create(payload: createUser): Promise<User> {
    const user = await this.findByUsername(payload.username)
    if (user)
      throw new HttpException("username already exists", HttpStatus.FORBIDDEN)
    return this.usersRepository.save(payload);
  }

  
  async setLoginTime(userId: number, time: Date) {
    await this.usersRepository.update({ id: userId }, { lastLogin: time })
  }
  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}