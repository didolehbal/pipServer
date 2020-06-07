import { Entity, Column, PrimaryGeneratedColumn, Unique, Timestamp, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import {Document} from "../../documents/model/document.entity"
@Entity()
export class Cours {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  title: string;

  @Column()
  description: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
  
  @OneToMany(type => Document, document => document.cours)
  documents: Document[];
}