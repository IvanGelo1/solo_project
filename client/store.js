import { configureStore } from '@reduxjs/toolkit';
import dateChangeReducer from './features/dateChangeSlice';
import activeUserReducer from './features/activeUserSlice';
import userNameReducer from './features/userNameSlice';
import durReducer from './features/durSlice';
import distanceReducer from './features/distanceSlice';
import paceReducer from './features/paceSlice';
import mapTraceReducer from './features/mapTraceSlice';

export default configureStore({
  reducer: {
    date: dateChangeReducer,
    user: activeUserReducer,
    userName: userNameReducer,
    dur: durReducer,
    distance: distanceReducer,
    pace: paceReducer,
    mapTrace: mapTraceReducer,
  },
});
