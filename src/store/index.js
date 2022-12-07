import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  // reducer: {
  //     modal: modalReducer,
  //     products: productsReducer,
  // },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger,thunk)
});

export default store;
