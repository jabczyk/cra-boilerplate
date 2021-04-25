import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

export interface CounterState {
  value: number
  changeCount: number
}

const initialState: CounterState = {
  value: 0,
  changeCount: 0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value++
      state.changeCount++
    },
    decrement: (state) => {
      state.value--
      state.changeCount++
    },
    reset: (state) => {
      if (state.value !== 0) {
        state.value = 0
        state.changeCount++
      }
    }
  }
})

export const { reducer } = counterSlice
export const { increment, decrement, reset } = counterSlice.actions

export const getCounter = (state: RootState) => state.counter
