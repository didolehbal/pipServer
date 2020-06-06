import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/model/user.entity';
import { AuthModule } from './auth/auth.module';
import { CoursModule } from './cours/cours.module';
import { Cours } from './cours/model/cours.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:"sqlite",
      database:"myDb",
      entities: [User,Cours],
      synchronize: true,
    }), 
    UsersModule, AuthModule, CoursModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
