import { Entity, Column, PrimaryGeneratedColumn, Unique, Timestamp, CreateDateColumn, ManyToMany, ManyToOne } from 'typeorm';
import { Filiere } from 'src/filiers/model/filier.entity';
import {Exclude} from "class-transformer"

@Entity()
@Unique(["username", "email"])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ type:"date",default: null })
   lastLogin: Date;

  @Column()
  username: string;

  @Column()
  @Exclude()
  password: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @ManyToOne(type => Filiere, filiere => filiere.etudiants,{eager:true})
  filiere: Filiere;

  @Column({ default: false })
  isBanned: boolean;

  @Column({ default: false })
  isAdmin: boolean;
}