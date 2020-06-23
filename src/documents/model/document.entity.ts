import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany} from 'typeorm';
import { Cours } from 'src/cours/model/cours.entity';
import { Solution } from 'src/solutions/model/solution.entity';
import { Task } from 'src/task/model/task.entity';

@Entity()
export class Document {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  url: string;

  @ManyToOne(type => Cours, cours => cours.documents)
  cours: Cours;

  @ManyToOne(type => Task, task => task.documents)
  task : Task

  @OneToMany(type => Solution, solution => solution.document)
  solutions: Solution[]

}