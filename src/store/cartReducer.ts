import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getBooks} from './bookActions';
interface CartItem {
  id: number;
  name: string;
  qty: number;
  sum: number;
  price: number;
}
interface CartState {
  items: CartItem[];
}
const initState: CartState = {
  items: [],
};
export const cartSlice = createSlice({
  name: 'cart',
  initialState: initState,
  reducers: {
    //add
    addItem: (state, action: PayloadAction<CartItem>) => {
      const isExist = state.items.find(item => item.id == action.payload?.id);
      if (isExist) {
        isExist.sum += action.payload?.price;
        isExist.qty += 1;
      } else {
        state.items.push({
          ...action.payload,
          sum: action.payload?.price,
          qty: 1,
        });
      }
    },

    //remove
    removeItem: (state, action: PayloadAction<CartItem>) => {
      const isExist = state.items.find(item => item.id == action.payload?.id);
      if (isExist && isExist.qty != 1) {
        isExist.qty -= 1;
        isExist.sum -= action.payload?.price;
      } else {
        state.items = state.items.filter(item => item.id !== action.payload.id);
      }
    },
  },
});
export const {addItem, removeItem} = cartSlice.actions;
export default cartSlice.reducer;
