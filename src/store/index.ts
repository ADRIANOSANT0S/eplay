import { configureStore } from '@reduxjs/toolkit'

import api from '../services/api'

import cardReducer from './reducers/card'

export const store = configureStore({
  reducer: {
    card: cardReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
