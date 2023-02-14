import { SET_PRODUCT } from "../constants/constants";
import { getProductById } from "../services/api/productsApi";

export const setProduct = (payload) => ({
    type: SET_PRODUCT,
    payload
});

export const getProduct = (itemNo) => async (dispatch) => {
	const response = await getProductById(itemNo);

    dispatch(setProduct(response));
};
