import { CartLine } from '../../cart-line/entities/cartLine.entity';
import { PurchaseLine } from '../../purchase-line/entities/purchaseLine.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'varchar' })
  image: string;

  @Column({ type: 'float' })
  price: number;

  @Column({ type: 'int', default: 50 })
  stock: number;

  @Column({ type: 'varchar' })
  category: string;

  @OneToMany(() => PurchaseLine, (purchaseLine) => purchaseLine.product, {
    cascade: true,
    onDelete: 'CASCADE',
    nullable: true,
  })
  purchaseLines: PurchaseLine[];

  @OneToMany(() => CartLine, (cartLines) => cartLines.product, {
    cascade: true,
    onDelete: 'CASCADE',
    nullable: true,
  })
  cartLines: CartLine[];
}
