import React from 'react'
import 'twin.macro'
import * as Sentry from '@sentry/react'
import { FormattedMessage } from 'react-intl'

export const ErrorBoundary: React.FC = ({ children }) => {
  if (!process.env.REACT_APP_SENTRY_DSN) return <>{children}</>

  return (
    <Sentry.ErrorBoundary fallback={FallbackComponent} showDialog>
      {children}
    </Sentry.ErrorBoundary>
  )
}

const FallbackComponent: React.FC = () => {
  return (
    <div tw="text-center mt-10">
      <h1 tw="text-3xl">
        <FormattedMessage id="error.unexpected" />
      </h1>
      <p tw="text-xl">
        <FormattedMessage id="error.reload" />
      </p>
    </div>
  )
}
