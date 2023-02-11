import { SET_GOODS } from "../constants/constants";

const initialState = [];

const goodsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_GOODS:
            const { payload } = action;
            return [...payload];

        default:
            return state;
    }
};

export default goodsReducer;
