import { Entity, Column, PrimaryGeneratedColumn, Unique, Timestamp, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne, ManyToMany } from 'typeorm';
import { Document } from "../../documents/model/document.entity"
import { Solution } from 'src/solutions/model/solution.entity';
import { Cours } from 'src/cours/model/cours.entity';

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title:string

    @Column("text")
    instructions : string

    @Column()
    deadline : Date

    @Column()
    noted  : boolean

    @ManyToOne(type => Cours, cours => cours.tasks)
    cours : Cours

    @OneToMany(type => Document, document => document.task)
    documents : Document[]

    @OneToMany(type => Solution, solution => solution.task)
    solutions : Solution[]
}