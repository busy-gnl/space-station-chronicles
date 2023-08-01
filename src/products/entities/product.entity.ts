import { CartLine } from 'src/carts/entities/cartLine.entity';
import { PurchaseLine } from 'src/purchases/entities/purchaseLine.entity';
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

  @OneToMany(() => PurchaseLine, (purchaseLine) => purchaseLine.productId)
  purchaseLines: PurchaseLine[];

  @OneToMany(() => CartLine, (cartLines) => cartLines.productId)
  cartLines: CartLine[];
}
