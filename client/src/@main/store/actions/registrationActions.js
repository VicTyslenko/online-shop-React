import { createAsyncThunk } from '@reduxjs/toolkit';

import axiosInstance from '../../../services/api/axios';

export const registerFetchData = createAsyncThunk('register/actionFetchData', async (params) => {
	const { data } = await axiosInstance.post('/customers/', params);

	return data;
});
