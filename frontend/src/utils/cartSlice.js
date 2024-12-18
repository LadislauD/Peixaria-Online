import { createSlice } from '@reduxjs/toolkit';
import { deserialize_cookie, getCookie, setCookie } from './helpers';
import { setItem, getItem } from './localStorage';

let cart = getItem('cart');

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: {
            cartItem: cart ? cart.cartItem : [],
            cartTotal: cart ? cart.cartTotal : 0,
            cartPriceTotal: cart? cart.cartPriceTotal : 0
        },
    },

    reducers: {
        incrementPriceTotal: (state, actions) => {
            state.value.cartPriceTotal += actions.payload;
        },

        incrementTotalQuantity: (state, actions) => {
            state.value.cartTotal += 1;
        },

        addPeixe: (state, actions) => {
            //console.log(state.value.cartItem)
            const itemIndex = state.value.cartItem.findIndex(
                (element) => element.id === actions.payload['id']
            );
            //console.log(itemIndex)
            if(itemIndex > -1)
                state.value.cartItem[itemIndex]['quantidade'] += 1;                
            else 
                state.value.cartItem.push(actions.payload);
            state.value.cartPriceTotal += actions.payload['preco'];
            state.value.cartTotal += 1;
            setItem('cart', state.value);
        },
    },
})

// Action creators are generated for each case reducer function
export const { addPeixe } = cartSlice.actions
export default cartSlice.reducer