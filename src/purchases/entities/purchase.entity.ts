import { PurchaseLine } from '../../purchase-line/entities/purchaseLine.entity';
import { User } from '../../users/entities/user.entity';
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

  @Column({ type: 'varchar' })
  status: string;

  @Column({ type: 'date', default: () => 'CURRENT_TIMESTAMP()' })
  date: string;

  @Column({ type: 'float' })
  total: number;

  @OneToMany(() => PurchaseLine, (purchaseLine) => purchaseLine.purchase, {
    cascade: true,
    onDelete: 'CASCADE',
    nullable: true,
  })
  purchaseLines: PurchaseLine[];

  @ManyToOne(() => User)
  user: User;
}
