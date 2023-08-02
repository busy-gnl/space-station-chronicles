import { Cart } from './cart.entity';
import { Product } from '../../products/entities/product.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class CartLine {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Product, (product) => product.id)
  product: number;

  @ManyToOne(() => Cart, (cart) => cart.id)
  cart: number;

  @Column({ type: 'int' })
  quantity: number;
}
