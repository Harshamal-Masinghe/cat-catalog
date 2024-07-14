import { configureStore } from '@reduxjs/toolkit'; // Importing configureStore function from Redux Toolkit
import breedReducer from './breedSlice'; // Importing the breed reducer

// Configuring the Redux store with the breed reducer
export const store = configureStore({
  reducer: {
    breeds: breedReducer,
  },
});

// Exporting types for the root state and app dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
