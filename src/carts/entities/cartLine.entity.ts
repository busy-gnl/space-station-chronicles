import { Cart } from 'src/carts/entities/cart.entity';
import { Product } from 'src/products/entities/product.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class CartLine {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Product, (product) => product.id)
  productId: number;

  @ManyToOne(() => Cart, (cart) => cart.id)
  cartId: number;

  @Column({ type: 'int' })
  quantity: number;
}
