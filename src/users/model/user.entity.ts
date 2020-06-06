import { Entity, Column, PrimaryGeneratedColumn, Unique, Timestamp, CreateDateColumn } from 'typeorm';

@Entity()
@Unique(["username"])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: null })
  subscriptionEnd: Date;
  
  @Column({ default: null })
  subscriptionStarted: Date;

  @CreateDateColumn({ type:"date",default: null })
   lastLogin: Date;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({ default: false })
  isBanned: boolean;

  @Column({ default: false })
  isAdmin: boolean;
}