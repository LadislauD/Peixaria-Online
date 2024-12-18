import { configureStore } from '@reduxjs/toolkit';
import clientReducer from '../utils/clientSlice';
import cartReducer from '../utils/cartSlice';

export default configureStore({
  reducer: {
    client: clientReducer,
    shopCart: cartReducer
  },
});