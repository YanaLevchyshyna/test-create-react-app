import { createSlice } from '@reduxjs/toolkit';

import { getCars } from '../redux/operations';

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    carsList: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.carsList = action.payload;
      })
      .addCase(getCars.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default carsSlice.reducer;
