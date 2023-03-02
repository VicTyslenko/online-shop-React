import { createAsyncThunk } from '@reduxjs/toolkit';

import axiosInstance from '../../../services/api/axios';

export const registerFetchData = createAsyncThunk('register/actionFetchData', async (params, { rejectWithValue }) => {
	try {
		const { data } = await axiosInstance.post('/customers/', params);

		return data;
	} catch (err) {
		
		console.log(rejectWithValue(err.response.data));
		return rejectWithValue(err.response.data);
	}
});
