import { CartLine } from './cartLine.entity';
import { User } from '../../users/entities/user.entity';
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

  @OneToMany(() => CartLine, (cartLine) => cartLine.cart, {
    cascade: true,
    eager: true,
    onDelete: 'CASCADE',
  })
  cartLines: CartLine[];

  @OneToOne(() => User, {
    cascade: true,
    eager: true,
    onDelete: 'CASCADE',
  })
  user: User;
}
