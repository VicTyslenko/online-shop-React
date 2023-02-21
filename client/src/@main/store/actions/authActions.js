import { createAsyncThunk } from '@reduxjs/toolkit';

import { postAuthoriation } from '../../../services/api/authApi';

export const actionFetchData = createAsyncThunk('auth/actionFetchData', async (params) => {
	const { data } = await postAuthoriation(params);

	return data;
});
