import { createSlice } from '@reduxjs/toolkit'

export const dateChangeSlice = createSlice({
  name: 'date',
  initialState: {
    value: ''
  },
  reducers: {
    dateChange: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { dateChange } = dateChangeSlice.actions

export default dateChangeSlice.reducer
