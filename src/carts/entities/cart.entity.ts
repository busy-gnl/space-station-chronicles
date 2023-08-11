import { CartLine } from '../../cart-line/entities/cartLine.entity';
import { User } from '../../users/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, OneToMany, OneToOne } from 'typeorm';

@Entity()
export class Cart {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => CartLine, (cartLine) => cartLine.cart, {
    cascade: true,
    onDelete: 'CASCADE',
    nullable: true,
  })
  cartLines: CartLine[];

  @OneToOne(() => User, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  user: User;
}
