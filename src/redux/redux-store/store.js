import { applyMiddleware, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import AsyncStorage from '@react-native-community/async-storage';

import reducer from '../redux-reducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['persist'], // select reducer to persist or permanent
  blacklist: [], // something temporary
};
const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer, applyMiddleware(thunk, logger));
const persistor = persistStore(store);

export { store, persistor };
