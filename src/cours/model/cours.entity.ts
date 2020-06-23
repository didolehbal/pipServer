import { Entity, Column, PrimaryGeneratedColumn, Unique, Timestamp, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToMany } from 'typeorm';
import {Document} from "../../documents/model/document.entity"
import { Link } from 'src/links/model/link.entity';
import { Filiere } from 'src/filiers/model/filier.entity';
import { Task } from 'src/task/model/task.entity';

@Entity()
@Unique(["title"])
export class Cours {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  title: string;

  @Column()
  anneeScolaire : string;

  @Column({default:"defaultpicutre.png"})
  picture : string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
  
  @OneToMany(type => Document, document => document.cours)
  documents: Document[];

  @OneToMany(type => Link, link => link.cours)
  links: Link[];

  @OneToMany(type => Task, task => task.cours)
  tasks: Task[];

  @ManyToMany(type => Filiere, filiere => filiere.cours)
  filiers: Filiere[];
}