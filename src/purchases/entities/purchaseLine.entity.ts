import { Product } from 'src/products/entities/product.entity';
import { Purchase } from 'src/purchases/entities/purchase.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class PurchaseLine {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Product, (product) => product.id)
  productId: number;

  @ManyToOne(() => Purchase, (purchase) => purchase.id)
  purchaseId: number;

  @Column({ type: 'date' })
  date: string;

  @Column({ type: 'int' })
  quantity: number;
}
