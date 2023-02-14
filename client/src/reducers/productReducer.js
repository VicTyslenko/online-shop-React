import { SET_PRODUCT } from "../constants/constants";

const initialState = {};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCT:
            const { payload } = action;
            return {...payload};

        default:
            return state;
    }
};

export default productReducer;
