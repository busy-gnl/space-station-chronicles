import { Cart } from 'src/carts/entities/cart.entity';
import { Purchase } from 'src/purchases/entities/purchase.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
  ManyToOne,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: true })
  firstName: string;

  @Column({ type: 'varchar', nullable: true })
  lastName: string;

  @Column({ type: 'varchar', nullable: true, unique: true })
  email: string;

  @Column({ type: 'varchar', nullable: true })
  address: string;

  @Column({ type: 'varchar', unique: true })
  hashedPassword: string;

  @Column({ type: 'varchar', nullable: true })
  phoneNumber: string;

  @Column({ type: 'varchar', default: 'user' })
  role: string;

  @OneToOne(() => Cart)
  cart: Cart;

  @ManyToOne(() => Purchase, (purchase) => purchase.id)
  purchases: Purchase[];
}
