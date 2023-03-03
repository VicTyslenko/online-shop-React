import { createAsyncThunk } from '@reduxjs/toolkit';

import { getProductsList as fetchProductList } from '../../../services/api/productsApi';

export const getProductList = createAsyncThunk(
	'productList/getProductList',
	async ({startPage, perPage, minPrice, maxPrice, colors}) => {

		const { data } = await fetchProductList({
			startPage,
			perPage,
			minPrice,
			maxPrice,
			colors
			// ...(maxPrice ? {maxPrice} : {}) - check if value exist
		});

	return data;
});
