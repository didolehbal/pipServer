import { Entity, Column, PrimaryGeneratedColumn, Unique, Timestamp, CreateDateColumn } from 'typeorm';

@Entity()
@Unique(["username", "email"])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ type:"date",default: null })
   lastLogin: Date;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  filiere: string;

  @Column({ default: false })
  isBanned: boolean;

  @Column({ default: false })
  isAdmin: boolean;
}