import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './modules/home';
import globalReducer from './modules/global';
import entireReducer from './modules/entire';

export const store = configureStore({
  reducer: {
    global: globalReducer,
    home: homeReducer,
    entire: entireReducer
  }
});

export * from './modules/home';
