import { createAsyncThunk } from "@reduxjs/toolkit";

import {
	getCart as fetchCart,
	decreaseQuantity as fetchDecreaseQuantity,
	deleteCart as fetchDeleteCart,
	deleteProductFromCart as fetchProductFromCart,
	addProductToCart as fetchProductToCart,
} from "../../../services/api/cartApi";

export const getCart = createAsyncThunk("cart/getCart", async (_, { getState }) => {
	const { auth } = getState();

	const { data } = await fetchCart({
		headers: {
			Authorization: auth.data?.token,
		},
	});
	return data;
});

export const addProductToCart = createAsyncThunk("cart/addProductToCart", async (id, { getState }) => {
	const { auth, product, cart } = getState();

	if (auth.data !== null) {
		const { data } = await fetchProductToCart(
			id,
			{
				size: product.currentSize,
				color: product.currentColor,
				cartQuantity: product.cartQuantity,
			},
			{
				headers: {
					Authorization: auth.data.token,
				},
			},
		);
		return data;
	} else {
		const products = cart.data.find(item => item.product._id === id)
			? cart.data.map(item => (item.product._id === id ? { ...item, cartQuantity: item.cartQuantity + 1 } : item))
			: [
					...cart.data,
					{
						product: product.data,
						cartQuantity: 1,
						size: product.currentSize,
						color: product.currentColor,
					},
			  ];

		return { products };
	}
});

export const decrementItemInCart = createAsyncThunk("cart/decreaseQuantity", async (id, { getState }) => {
	const { auth, cart } = getState();

	const productInCart = cart.data.find(item => item.product._id === id);

	if (productInCart && productInCart.cartQuantity > 1) {
		if (auth.data !== null) {
			const { data } = await fetchDecreaseQuantity(id, {
				headers: {
					Authorization: auth.data.token,
				},
			});
			return data;
		} else {
			const updatedProducts = cart.data.map(item =>
				item.product._id === id ? { ...item, cartQuantity: item.cartQuantity - 1 } : item,
			);
			return { products: updatedProducts };
		}
	} else {
		return { products: cart.data };
	}
});

export const deleteProductFromCart = createAsyncThunk("cart/deleteProductFromCart", async (id, { getState }) => {
	const { auth, cart } = getState();

	if (auth.data !== null) {
		const { data } = await fetchProductFromCart(id, {
			headers: {
				Authorization: auth.data?.token,
			},
		});

		return data;
	} else {
		const products = cart.data.filter(({ product }) => product._id !== id);

		return { products };
	}
});

export const deleteCart = createAsyncThunk("cart/deleteCart", async (_, { getState }) => {
	const { auth } = getState();

	if (auth.data !== null) {
		const { data } = await fetchDeleteCart(
			{},
			{
				headers: {
					Authorization: auth.data?.token,
				},
			},
		);
		return data;
	}
});
