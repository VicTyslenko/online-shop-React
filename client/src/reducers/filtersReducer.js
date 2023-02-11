import { ADD_FILTER, REMOVE_FILTER, CLEAR_FILTER } from "../constants/constants";

const initilState = {
	minPrice: 0,
	maxPrice: 2500,
	categories: [],
	colors: [],
}
// state = {}
function filtersReducer(state = initilState, action) {
	const { payload } = action;

	switch (action.type) {
		case ADD_FILTER:
            return {
				...state,
				...payload
			};

        case REMOVE_FILTER:
			const newState = { ...state };
			if(payload in newState) {
				delete newState[payload];
			}
            return newState;

        case CLEAR_FILTER:
            return {};

        default:
            return state;
	}
}

export default filtersReducer;
