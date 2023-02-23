import { createAsyncThunk } from '@reduxjs/toolkit';

import { postAuthoriation } from '../../../services/api/authApi';

export const actionFetchAuth = createAsyncThunk('auth/actionFetchData', async () => {
	const { data } = await postAuthoriation();

	return data;
});
