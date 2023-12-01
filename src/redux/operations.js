import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchCars } from '../fetch-cars/fetchCars';

export const getCars = createAsyncThunk(
  'cars/getCars',
  async (_, { rejectWithValue }) => {
    try {
      const cars = await fetchCars();
      return cars;
    } catch (error) {
      console.log('error', error);
      return rejectWithValue(error.message);
    }
  }
);
