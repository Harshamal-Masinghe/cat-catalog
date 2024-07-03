import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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

interface BreedsState {
  breeds: Breed[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: BreedsState = {
  breeds: [],
  status: 'idle',
  error: null,
};

export const fetchBreeds = createAsyncThunk('breeds/fetchBreeds', async () => {
  const response = await axios.get('https://api.thecatapi.com/v1/breeds', {
    headers: {
      'x-api-key': process.env.NEXT_PUBLIC_CAT_API_KEY,
    },
  });
  return response.data;
});

const breedsSlice = createSlice({
  name: 'breeds',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBreeds.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBreeds.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.breeds = action.payload;
      })
      .addCase(fetchBreeds.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch breeds';
      });
  },
});

export default breedsSlice.reducer;
