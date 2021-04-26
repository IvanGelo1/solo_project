import { createSlice } from '@reduxjs/toolkit'

export const userNameSlice = createSlice({
  name: 'userName',
  initialState: {
    value: ''
  },
  reducers: {
    userNameChange: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { userNameChange } = userNameSlice.actions;

export default userNameSlice.reducer;