import { Entity, Column, PrimaryGeneratedColumn, Unique, Timestamp, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import {User} from "../../users/model/user.entity"

@Entity()
@Unique(["title"])
export class Filiere {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  title: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
  
  @OneToMany(type => User,user => user.filiere)
  etudiants: User[];
}