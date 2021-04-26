import { Router } from '@reach/router'
import React from 'react'
import { GlobalStyles } from 'twin.macro'
import Error404 from '../../pages/404'
import Counter from '../../pages/counter'
import { ErrorBoundary } from './ErrorBoundary'
import { IntlProvider } from './IntlProvider'

const App: React.FC = () => {
  return (
    <IntlProvider>
      <GlobalStyles />
      <ErrorBoundary>
        <div data-testid="app">
          <Router>
            <Counter path="/" />
            <Error404 default />
          </Router>
        </div>
      </ErrorBoundary>
    </IntlProvider>
  )
}

export default App
