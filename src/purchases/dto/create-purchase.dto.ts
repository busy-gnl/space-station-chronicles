import { User } from '../../users/entities/user.entity';
import { PurchaseLine } from '../entities/purchaseLine.entity';

export class CreatePurchaseDto {
  id: number;
  userId: number;
  status: string;
  date: string;
  total: number;
  purchaseLines: PurchaseLine[];
  user: User;
}
