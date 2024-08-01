// import {applyMiddleware, combineReducers, createStore} from 'redux';
// import userReducer from './userReducer';
// import {persistReducer, persistStore} from 'redux-persist';
// import storage from '@react-native-async-storage/async-storage';
// import thunk from 'redux-thunk';
// import {createAction} from '@reduxjs/toolkit';

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const rootReducer = combineReducers({
//   userData: persistReducer(persistConfig, userReducer),
// });

// export const store = createAction(rootReducer, applyMiddleware(thunk));
// export const persistor = persistStore(store);
// export type RootState = ReturnType<typeof rootReducer>;

// new
import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './counterReducer';
import booksSlice from './bookReducer';
import cartReducer from './cartReducer';
import storage from '@react-native-async-storage/async-storage';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import persistStore from 'redux-persist/lib/persistStore';
const persistConfig = {
  key: 'root',
  storage,
  version: 1,
};
const persistedReducer = persistReducer(persistConfig, cartReducer);
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    books: booksSlice,
    card: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE < PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
