import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment } from '../utils/counterSlice'


export function Counter() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
       
      </div>
    </div>
  )
}