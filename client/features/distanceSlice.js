import { createSlice } from '@reduxjs/toolkit';

export const distanceSlice = createSlice({
  name: 'distance',
  initialState: {
    value: 0,
  },
  reducers: {
    distanceChange: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { distanceChange } = distanceSlice.actions;

export default distanceSlice.reducer;
