import { SET_GOODS } from "../constants/constants";
import { sendRequest } from "../services/index";

export const setGoods = (payload) => ({
    type: SET_GOODS,
    payload
});

export const getGoods = () => async dispatch => {
    const response = await sendRequest("http://localhost:3000/products");
    dispatch(setGoods(response));
};
