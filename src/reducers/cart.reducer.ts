/** Core */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

/** Interfaces */
import { IMedicine, IMedicineCart } from '../interfaces';

const initialState: IMedicineCart[] = [];

export const cartSlice = createSlice({
  name: 'cartReducer',
  initialState,
  reducers: {
    addMedicine(state, action: PayloadAction<IMedicine>) {
      const medicine = action.payload;
      const medicineIndex = state.findIndex((item) => item.id === medicine.id);

      if (medicineIndex !== -1) state[medicineIndex].quantity += 1;
      else state.push({ ...medicine, quantity: 1 });
    },
    removeMedicine(state, action: PayloadAction<IMedicine>) {
      const medicine = action.payload;
      const medicineIndex = state.findIndex((item) => item.id === medicine.id);

      if (medicineIndex !== -1) {
        if (state[medicineIndex].quantity === 1) state.splice(medicineIndex, 1);
        else state[medicineIndex].quantity -= 1;
      }
    },
    clearCart(state) {
      state.splice(0, state.length);
    },
  },
});

export const { addMedicine, removeMedicine, clearCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
