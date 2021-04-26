import { configureStore } from '@reduxjs/toolkit'
import dateChangeReducer from './features/dateChangeSlice'
import activeUserReducer from './features/activeUserSlice'

export default configureStore({
  reducer: {
    date: dateChangeReducer,
    user: activeUserReducer
  }
})
