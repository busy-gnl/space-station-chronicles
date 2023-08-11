import { Product } from '../../products/entities/product.entity';
import { Purchase } from '../../purchases/entities/purchase.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class PurchaseLine {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Product, (product) => product.id)
  product: number;

  @ManyToOne(() => Purchase, (purchase) => purchase.id)
  purchase: number;

  @Column({ type: 'int' })
  quantity: number;
}
