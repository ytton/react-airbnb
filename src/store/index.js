import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './modules/home';
import globalReducer from './modules/global';
import entireReducer from './modules/entire';
import detailReducer from './modules/detail';

export const store = configureStore({
  reducer: {
    global: globalReducer,
    home: homeReducer,
    entire: entireReducer,
    detail: detailReducer
  }
});

export * from './modules/home';
