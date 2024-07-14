import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'; // Importing functions from Redux Toolkit
import axios from 'axios'; // Importing axios for making HTTP requests

// Defining the Breed interface
interface Breed {
  id: string;
  name: string;
  origin: string;
  life_span: string;
  description: string;
  image: {
    url: string;
  };
}

// Defining the state interface for the breed slice
interface BreedsState {
  breeds: Breed[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

// Initial state for the breed slice
const initialState: BreedsState = {
  breeds: [],
  status: 'idle',
  error: null,
};

// Asynchronous thunk action for fetching breeds from the API
export const fetchBreeds = createAsyncThunk('breeds/fetchBreeds', async () => {
  const response = await axios.get('https://api.thecatapi.com/v1/breeds', {
    headers: {
      'x-api-key': process.env.NEXT_PUBLIC_CAT_API_KEY,
    },
  });
  return response.data; // Returning the response data as the action payload
});

// Creating the breed slice
const breedsSlice = createSlice({
  name: 'breeds',
  initialState,
  reducers: {}, // No reducers, only extraReducers for handling async actions
  extraReducers: (builder) => {
    builder
      .addCase(fetchBreeds.pending, (state) => {
        state.status = 'loading'; // Setting status to 'loading' when the fetchBreeds action is pending
      })
      .addCase(fetchBreeds.fulfilled, (state, action) => {
        state.status = 'succeeded'; // Setting status to 'succeeded' when the fetchBreeds action is fulfilled
        state.breeds = action.payload; // Updating breeds with the fetched data
      })
      .addCase(fetchBreeds.rejected, (state, action) => {
        state.status = 'failed'; // Setting status to 'failed' when the fetchBreeds action is rejected
        state.error = action.error.message || 'Failed to fetch breeds'; // Updating the error message
      });
  },
});

export default breedsSlice.reducer; // Exporting the reducer
