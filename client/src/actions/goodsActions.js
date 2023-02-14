import { SET_GOODS } from "../constants/constants";
import sendRequest from "../services/index";

export const setGoods = (payload) => ({
    type: SET_GOODS,
    payload
});

export const getGoods = () => async (dispatch, getState) => {
	const state = getState();
	// if (filters) sendRequest to products/filters, if not, just products
	// console.log('asdf', state);
    const response = await sendRequest("/products?perPage=10&startPage=1");
    dispatch(setGoods(response));
};
