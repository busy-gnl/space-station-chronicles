import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class IssModule {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'varchar' })
  picture: string;
}
