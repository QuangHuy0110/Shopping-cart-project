import {configureStore} from '@reduxjs/toolkit'
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
import cartSlice from './card-slice'
import apiSlice from './api-slice'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { combineReducers } from '@reduxjs/toolkit'

const persistConfig = {
    key: 'root',
    storage,
  }

const reducer = combineReducers({
    cart: cartSlice.reducer,
    api: apiSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})