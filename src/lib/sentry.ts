import * as Sentry from '@sentry/react'
import { version } from '../../package.json'

if (process.env.REACT_APP_SENTRY_DSN) {
  Sentry.init({
    dsn: process.env.REACT_APP_SENTRY_DSN,
    release: version
  })
}
