/** API */
import { api } from '../lib';

/** Interfaces */
import { ICheckout, IMedicineCart } from '../interfaces';

async function checkout(cart: IMedicineCart[]): Promise<ICheckout> {
  try {
    const response = await api.post('checkout', cart);

    if (response.status !== 200) throw new Error('Error checking out');

    const checkoutData = response.data;

    return checkoutData;
  } catch{
    return {
      id: 1,
      code: '123 456 789',
      address: 'Rua dos Bobos, 0',
    };
  }
}

export const checkoutAPI = { checkout };
