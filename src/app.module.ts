import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/model/user.entity';
import { AuthModule } from './auth/auth.module';
import { CoursModule } from './cours/cours.module';
import { Cours } from './cours/model/cours.entity';
import { DocumentsModule } from './documents/documents.module';
import { ScreenshareModule } from './screenshare/screenshare.module';
import { ScreenshareGateway } from './screenshare/screenshare.gateway';
import { LinksModule } from './links/links.module';
import { FiliersModule } from './filiers/filiers.module';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'spa'),// here should go the SPA static files for clients
      
    }),
    TypeOrmModule.forRoot({
      type:"sqlite",
      database:"myDb",
      autoLoadEntities:true,
      synchronize: true,
    }), 
    UsersModule, AuthModule, CoursModule, DocumentsModule, ScreenshareModule, LinksModule, FiliersModule],
  controllers: [AppController],
  providers: [AppService, ScreenshareGateway],
})
export class AppModule { }
