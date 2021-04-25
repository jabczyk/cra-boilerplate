import React from 'react'
import 'twin.macro'
import { useDispatch, useSelector } from 'react-redux'
import {
  decrement,
  getCounter,
  increment,
  reset
} from '../store/counter/counter.slice'
import { FormattedMessage } from 'react-intl'
import { RouteComponentProps } from '@reach/router'
import { Button } from '../components/shared/Button'

const Counter: React.FC<RouteComponentProps> = () => {
  const dispatch = useDispatch()
  const counter = useSelector(getCounter)

  return (
    <div tw="text-center mt-10">
      <h1 tw="text-3xl">
        <FormattedMessage
          id="counter.value"
          values={{ value: counter.value }}
        />
      </h1>
      <p tw="text-xl">
        <FormattedMessage
          id="counter.change-count"
          values={{ count: counter.changeCount }}
        />
      </p>

      <div tw="mt-4">
        <Button variant="primary" onClick={() => dispatch(increment())}>
          <FormattedMessage id="counter.increment" />
        </Button>
        <Button onClick={() => dispatch(decrement())}>
          <FormattedMessage id="counter.decrement" />
        </Button>
        <Button variant="destructive" onClick={() => dispatch(reset())}>
          <FormattedMessage id="counter.reset" />
        </Button>
      </div>
    </div>
  )
}

export default Counter
