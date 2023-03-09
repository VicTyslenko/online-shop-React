import { createSlice } from '@reduxjs/toolkit';
import { getCart, addProductToCart, deleteProductFromCart } from '../actions/cartActions';

const initialState = {
	data: [],
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		// incrementQuantity: (state, action) => {
		// 	const item = state.cart.find((item) => item.id === action.payload);
		// 	item.quantity++;
		//   },
		//   decrementQuantity: (state, action) => {
		// 	const item = state.cart.find((item) => item.id === action.payload);
		// 	if (item.quantity === 1) {
		// 	  item.quantity = 1
		// 	} else {
		// 	  item.quantity--;
		// 	}
		//   },
	},
	extraReducers: (builder) => {
		builder.addCase(getCart.fulfilled, (state, action) => {
			state.data = action.payload?.products || []
		})


		builder.addCase(addProductToCart.fulfilled, (state, action) => {
			const { products } = action.payload;
			state.data = [...products];
		});

		builder.addCase(deleteProductFromCart.fulfilled, (state, action) => {
			const { products } = action.payload;

			state.data = [...products];
		});
	},
});

// export const { incrementQuantity, decrementQuantity } = cartSlice.actions;

export default cartSlice.reducer;
