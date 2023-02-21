import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

import productList from '../@main/store/slices/productListSlice';
import product from '../@main/store/slices/productSlice';

import favoritesReducer from '../reducers/favoritesReducer';
import cartReducer from '../reducers/cartReducer';
import filtersReducer from '../reducers/filtersReducer';

const persistConfig = {
	key: 'root',
	storage,
};

const rootReduser = combineReducers({
	productList,
	product,

	favorites: favoritesReducer,
	cart: cartReducer,
	filters: filtersReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReduser);

function setupStore() {
	return configureStore({
		reducer: persistedReducer,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({
				serializableCheck: {
					ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
				},
			}),
	});
}

export const store = setupStore();
export const persistor = persistStore(store);
