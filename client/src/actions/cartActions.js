import { ADD_CART, REMOVE_CART, CLEAR_CART } from "../constants/constants";

/**
 *
 * @param {string} payload
 */
export const addCart = (payload) => ({
    type: ADD_CART,
    payload
});

/**
 *
 * @param {string} payload
 */
export const removeCart = (payload) => ({
    type: REMOVE_CART,
    payload
});

export const clearCart = () => ({
    type: CLEAR_CART,
});
