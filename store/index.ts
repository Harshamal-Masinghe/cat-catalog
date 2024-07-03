import { configureStore } from '@reduxjs/toolkit';
import breedReducer from './breedSlice';

export const store = configureStore({
  reducer: {
    breeds: breedReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
