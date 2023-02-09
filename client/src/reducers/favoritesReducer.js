import { ADD_FAVORITE, REMOVE_FAVORITE } from "../constants/constants";
import LocalStorage from "../services/localStorageService";

const ls = new LocalStorage();
const initialState = JSON.parse(ls.get("favorites")) || [];

const favoritesReducer = (state = initialState, action) => {
    const { payload } = action;

    switch (action.type) {
        case ADD_FAVORITE:
            const result = new Set(state);
            result.add(payload)
            return [...result];

        case REMOVE_FAVORITE:
            return state.filter(item => item !== payload)

        default:
            return state;
    }
};

export default favoritesReducer;
