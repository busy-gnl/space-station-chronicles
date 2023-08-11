import { Cart } from '../../carts/entities/cart.entity';
import { Purchase } from '../../purchases/entities/purchase.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: true })
  firstName: string;

  @Column({ type: 'varchar', nullable: true })
  lastName: string;

  @Column({ type: 'varchar', unique: true })
  email: string;

  @Column({ type: 'varchar', nullable: true })
  address: string;

  @Column({ type: 'varchar' })
  hashedPassword: string;

  @Column({ type: 'varchar', nullable: true })
  phoneNumber: string;

  @Column({ type: 'varchar', default: 'user' })
  role: string;

  @OneToOne(() => Cart, {
    cascade: true,
    onDelete: 'CASCADE',
    nullable: true,
  })
  cart: Cart;

  @OneToMany(() => Purchase, (purchase) => purchase.id, {
    cascade: true,
    onDelete: 'CASCADE',
    nullable: true,
  })
  purchases: Purchase[];

  @Column({ type: 'boolean', default: true })
  isActive: boolean;
}
