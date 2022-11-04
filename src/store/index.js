import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './modules/home';
import globalReducer from './modules/global';

export const store = configureStore({
  reducer: {
    global: globalReducer,
    home: homeReducer
  }
});

export * from './modules/home';
