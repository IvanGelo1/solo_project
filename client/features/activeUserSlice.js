import { createSlice } from '@reduxjs/toolkit';

export const activeUserSlice = createSlice({
  name: 'user',
  initialState: {
    value: 0,
  },
  reducers: {
    userChange: (state, action) => {
      state.value = action.payload;
    },
  },
})

export const { userChange } = activeUserSlice.actions;

export default activeUserSlice.reducer;