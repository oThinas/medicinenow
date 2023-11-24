/** Core */
import { configureStore } from '@reduxjs/toolkit';

/** Reducers */
import { cartReducer, userReducer } from '../reducers';

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
