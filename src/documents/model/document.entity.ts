import { Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import { Cours } from 'src/cours/model/cours.entity';

@Entity()
export class Document {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  url: string;

  @ManyToOne(type => Cours, user => user.documents)
  cours: Cours;
}