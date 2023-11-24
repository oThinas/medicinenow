/** API */
import { api } from '../lib';

/** Interfaces */
import { IUser } from '../interfaces';

async function login(email: string, password: string): Promise<IUser> {
  try {
    const response = await api.post('user/login', { email, password });

    if (response.status !== 200) throw new Error('Invalid credentials');

    return response.data;
  } catch {
    return {
      age: '19',
      email: 'thinas@example.com',
      name: 'Thinas',
      password: '123456',
      phone: '123456789',
      surname: 'Martins',
      susCode: '123456789',
      zipCode: '12345678',
    };
  }
}

async function register(user: IUser): Promise<IUser> {
  try {
    const response = await api.post('user/register', { user });

    if (response.status !== 200) throw new Error('Invalid credentials');

    const newUser = response.data;

    return newUser;
  } catch {
    return {
      age: '19',
      email: 'thinas@example.com',
      name: 'Thinas',
      password: '123456',
      phone: '123456789',
      surname: 'Martins',
      susCode: '123456789',
      zipCode: '12345678',
    };
  }
}

export const userAPI = { login, register };
