import { configureStore } from '@reduxjs/toolkit';
import userReducer from './Features/user';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer
  },
});
