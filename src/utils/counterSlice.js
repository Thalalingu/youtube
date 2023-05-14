import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: state => {
      state.value += 1
    },
    // state is initial value that is 0 and it will get update when dispatch action

 
  }
})

export const { increment } = counterSlice.actions

export default counterSlice.reducer