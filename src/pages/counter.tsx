import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  decrement,
  getCounter,
  increment,
  reset
} from '../store/counter/counter.slice'
import { FormattedMessage } from 'react-intl'
import { RouteComponentProps } from '@reach/router'

const Counter: React.FC<RouteComponentProps> = () => {
  const dispatch = useDispatch()
  const counter = useSelector(getCounter)

  return (
    <div>
      <h1>
        <FormattedMessage
          id="counter.value"
          values={{ value: counter.value }}
        />
      </h1>
      <h2>
        <FormattedMessage
          id="counter.change-count"
          values={{ count: counter.changeCount }}
        />
      </h2>

      <button onClick={() => dispatch(increment())}>
        <FormattedMessage id="counter.increment" />
      </button>
      <button onClick={() => dispatch(decrement())}>
        <FormattedMessage id="counter.decrement" />
      </button>
      <button onClick={() => dispatch(reset())}>
        <FormattedMessage id="counter.reset" />
      </button>
    </div>
  )
}

export default Counter
