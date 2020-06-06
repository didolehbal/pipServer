import { Entity, Column, PrimaryGeneratedColumn, Unique, Timestamp, CreateDateColumn } from 'typeorm';

@Entity()
export class Cours {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
}