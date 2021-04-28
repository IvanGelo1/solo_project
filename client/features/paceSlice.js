import { createSlice } from '@reduxjs/toolkit';

export const paceSlice = createSlice({
  name: 'pace',
  initialState: {
    value: '',
  },
  reducers: {
    paceChange: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { paceChange } = paceSlice.actions;

export default paceSlice.reducer;
