import { createAsyncThunk } from '@reduxjs/toolkit';

import { getProductsList as fetchProductList } from '../../../services/api/productsApi';

export const getProductList = createAsyncThunk('productList/getProductList', async () => {
	const { data } = await fetchProductList();

	return data;
});
