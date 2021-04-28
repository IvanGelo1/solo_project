import { createSlice } from '@reduxjs/toolkit';

export const mapTraceSlice = createSlice({
  name: 'mapTrace',
  initialState: {
    value: [],
  },
  reducers: {
    mapTraceChange: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { mapTraceChange } = mapTraceSlice.actions;

export default mapTraceSlice.reducer;
