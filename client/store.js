import { configureStore } from '@reduxjs/toolkit';
import dateChangeReducer from './features/dateChangeSlice';

export default configureStore({
  reducer: {
    date: dateChangeReducer,
  },
});