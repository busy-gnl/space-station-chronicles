import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Crew {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'int' })
  age: number;

  @Column({ type: 'varchar' })
  nation: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'varchar' })
  picture: string;
}
