/** Core */
import { IMedicine } from './IMedicine';

export interface IMedicineCart extends IMedicine {
  quantity: number;
}
