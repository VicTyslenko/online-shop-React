import { ADD_FILTER, REMOVE_FILTER, CLEAR_FILTER } from "../constants/constants";

/**
 *
 * @param {string} payload
 */
export const addFilter = (payload) => ({
    type: ADD_FILTER,
    payload
});

/**
 *
 * @param {string} payload
 */
export const removeFilter = (payload) => ({
    type: REMOVE_FILTER,
    payload
});

export const clearFilter = () => ({
    type: CLEAR_FILTER,
});
