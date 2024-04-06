import { configureStore } from '@reduxjs/toolkit'
import { bookViewReducer } from './features/bookView/bookview'

export const store = configureStore({
  reducer: {
    bookView: bookViewReducer,
  },
})

export type State = ReturnType<typeof store.getState>
