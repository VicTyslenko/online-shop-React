import { createAsyncThunk } from '@reduxjs/toolkit';

import { getProductsList as fetchProductList } from '../../../services/api/productsApi';

export const getProductList = createAsyncThunk(
	'productList/getProductList',
	async ({startPage, perPage}) => {
		const { data } = await fetchProductList(startPage, perPage);

	return data;
});
