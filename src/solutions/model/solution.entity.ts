import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, Double, CreateDateColumn,  } from 'typeorm';
import { Document} from "../../documents/model/document.entity"
import { Task } from 'src/task/model/task.entity';
import { User } from 'src/users/model/user.entity';
@Entity()
export class Solution {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title:string

    @Column()
    note:number

    @CreateDateColumn()
    createdAt : Date

    @ManyToOne(type => Document, document => document.solutions)
    document : Document

    @ManyToOne(type => Task, task => task.solutions)
    task : Task

    @ManyToOne(type => User, user => user.solutions)
    user : User
}
