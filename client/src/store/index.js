import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

import goodsReducer from '../reducers/goodsReducer';
import favoritesReducer from '../reducers/favoritesReducer';
import cartReducer from '../reducers/cartReducer';

const persistConfig = {
	key: 'root',
	storage,
};

const rootReduser = combineReducers({
	goods: goodsReducer,
	favorites: favoritesReducer,
	cart: cartReducer,
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