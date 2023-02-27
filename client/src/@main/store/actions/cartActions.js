import { createAsyncThunk } from "@reduxjs/toolkit";

import { getCart as fetchCart, addProductToCart as fetchProductToCart, deleteProductFromCart as fetchProductFromCart } from "../../../services/api/cartApi";

export const getCart = createAsyncThunk(
	'cart/getCart',
	async ( _, { getState }) => {
		const { auth } = getState();

		const { data } = await fetchCart({
			headers: {
				Authorization: auth.data?.token
			}
		});
		return data;
});

export const addProductToCart = createAsyncThunk(
	'cart/addProductToCart',
	async (id, { getState }) => {
		const { auth } = getState();

		const { data } = await fetchProductToCart(id, {
			headers: {
				Authorization: auth.data?.token
			}
		});
		// const { data } = await fetchProductToCart(id);
		return data;
});

export const deleteProductFromCart = createAsyncThunk(
	'cart/deleteProductFromCart',
	async (id, { getState }) => {
		const { auth } = getState();

		const { data } = await fetchProductFromCart(id, {
			headers: {
				Authorization: auth.data?.token
			}
		});
		return data;
});
