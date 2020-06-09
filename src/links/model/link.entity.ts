import { Entity, Column, PrimaryGeneratedColumn, Unique, Timestamp, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne } from 'typeorm';
import { Cours } from 'src/cours/model/cours.entity';

@Entity()
@Unique(["title"])
export class Link {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  title: string;

  @Column()
  url: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
  
  @ManyToOne(type => Cours, cours => cours.links)
  cours: Cours;
}