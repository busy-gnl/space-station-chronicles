import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Mission {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  domain: string;

  @Column({ type: 'text' })
  description: string;
}
