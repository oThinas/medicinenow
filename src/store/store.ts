/** Core */
import { configureStore } from '@reduxjs/toolkit';

/** Reducers */
import { userReducer } from '../reducers';

export const store = configureStore({ reducer: { user: userReducer } });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
