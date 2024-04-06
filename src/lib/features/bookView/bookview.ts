import { createSlice } from '@reduxjs/toolkit'

export type BookView = 'list' | 'grid'

export const bookViewSlice = createSlice({
  name: 'bookView',
  initialState: {
    value: 'list',
  } as {
    value: BookView
  },
  reducers: {
    toggleView: (state) => {
      state.value = state.value === 'list' ? 'grid' : 'list'
    },
  },
})

export const bookViewReducer = bookViewSlice.reducer
export const { toggleView } = bookViewSlice.actions
