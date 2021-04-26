import { createSlice } from '@reduxjs/toolkit'

export const durSlice = createSlice({
  name: 'dur',
  initialState: {
    value: ''
  },
  reducers: {
    durChange: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { durChange } = durSlice.actions

export default durSlice.reducer