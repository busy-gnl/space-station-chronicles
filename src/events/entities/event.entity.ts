import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  date: string;

  @Column({ type: 'varchar' })
  title: string;

  @Column({ type: 'varchar' })
  picture: string;

  @Column({ type: 'text' })
  description: string;
}
