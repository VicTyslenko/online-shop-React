import { SET_PRODUCT } from "../constants/constants";
import sendRequest from "../services/index";

export const setProduct = (payload) => ({
    type: SET_PRODUCT,
    payload
});

export const getProduct = (itemNo) => async (dispatch, getState) => {
	const state = getState();
	const response = await sendRequest(`/products?/${itemNo}`);
	console.log(response);
    dispatch(setProduct(response));
};
