import { Entity, Column, PrimaryGeneratedColumn, Unique, Timestamp, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import {Document} from "../../documents/model/document.entity"
import { Link } from 'src/links/model/link.entity';

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

  @Column()
  filiere : string

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
  
  @OneToMany(type => Document, document => document.cours)
  documents: Document[];

  @OneToMany(type => Link, link => link.cours)
  links: Link[];
}