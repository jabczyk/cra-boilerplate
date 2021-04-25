import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  decrement,
  getCounter,
  increment,
  reset
} from '../store/counter/counter.slice'

const Counter: React.FC = () => {
  const dispatch = useDispatch()
  const counter = useSelector(getCounter)

  return (
    <div>
      {JSON.stringify(counter)}

      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  )
}

export default Counter
