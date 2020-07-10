import { Entity, Column, PrimaryGeneratedColumn, Unique, Timestamp, CreateDateColumn, ManyToMany, ManyToOne, OneToMany } from 'typeorm';
import { Filiere } from 'src/filiers/model/filier.entity';
import {Exclude} from "class-transformer"
import { Solution } from 'src/solutions/model/solution.entity';

@Entity()
@Unique(["username", "email"])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ type:"datetime",default: null })
   lastLogin: Date;

  @Column()
  username: string;

  @Column()
  @Exclude() // exclude password from being sent in responses
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

  @OneToMany(type => Solution, solution => solution.user)
  solutions : Solution[]
}