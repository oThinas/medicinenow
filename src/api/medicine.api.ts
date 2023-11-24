/** API */
import { api } from '../lib';

/** Interfaces */
import { IMedicine } from '../interfaces';

async function getMedicineList(): Promise<IMedicine[]> {
  try {
    const response = await api.get('medicine');
    if (response.status !== 200) throw new Error('Error getting medicine list');

    const medicineList = response.data;

    return medicineList;
  } catch {
    return [
      { id: 1, name: 'Paracetamol', manufacturer: 'EMS', dosage: '500mg' },
      { id: 2, name: 'Neovagina', manufacturer: 'Bayer', dosage: '12 unidades' },
      { id: 3, name: 'Dipirona', manufacturer: 'Prati', dosage: '10ml' },
    ];
  }
}

export const medicineAPI = { getMedicineList };
