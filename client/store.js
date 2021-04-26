import { configureStore } from '@reduxjs/toolkit'
import dateChangeReducer from './features/dateChangeSlice'
import activeUserReducer from './features/activeUserSlice'
import userNameReducer from './features/userNameSlice';
import durReducer from './features/durSlice';

export default configureStore({
  reducer: {
    date: dateChangeReducer,
    user: activeUserReducer,
    userName: userNameReducer,
    dur: durReducer,
  }
})
