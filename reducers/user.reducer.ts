/** Interfaces */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IUser } from '../src/interfaces';

const initialState: IUser = {
  age: '',
  email: '',
  name: '',
  password: '',
  phone: '',
  surname: '',
  susCode: '',
  zipCode: '',
};

export const userSlice = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IUser>) {
      const { age, email, name, password, phone, surname, susCode, zipCode } = action.payload;
      state.age = age;
      state.email = email;
      state.name = name;
      state.password = password;
      state.phone = phone;
      state.surname = surname;
      state.susCode = susCode;
      state.zipCode = zipCode;
    },
  },
});

export const { setUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
