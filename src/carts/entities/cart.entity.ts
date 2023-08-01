import { CartLine } from 'src/carts/entities/cartLine.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
} from 'typeorm';

@Entity()
export class Cart {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  userId: number;

  @OneToMany(() => CartLine, (cartLine) => cartLine.cartId)
  cartLines: CartLine[];

  @OneToOne(() => User)
  user: User;
}
