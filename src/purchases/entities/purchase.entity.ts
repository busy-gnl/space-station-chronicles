import { PurchaseLine } from 'src/purchases/entities/purchaseLine.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Purchase {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  userId: number;

  @Column({ type: 'varchar' })
  status: string;

  @Column({ type: 'date' })
  date: string;

  @OneToMany(() => PurchaseLine, (purchaseLine) => purchaseLine.purchaseId)
  purchaseLines: PurchaseLine[];

  @ManyToOne(() => User)
  user: User;
}
