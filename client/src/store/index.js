// Tried the store and a hybrid version also but mone of them were significantly better solutions. 

import { configureStore } from '@reduxjs/toolkit';
import { reducer as menuReducer } from './menuSlice.js';

const store = configureStore({
    reducer: {
      menu: menuReducer,
    },
    devTools: process.env.NODE_ENV === 'development'
  });

  export default store;
