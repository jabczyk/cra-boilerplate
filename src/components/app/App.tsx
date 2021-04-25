import React from 'react'
import { FormattedMessage } from 'react-intl'
import { IntlProvider } from './IntlProvider'

const App: React.FC = () => {
  return (
    <IntlProvider>
      <div data-testid="app">
        <h1>
          <FormattedMessage id="hello-world" />
        </h1>
      </div>
    </IntlProvider>
  )
}

export default App
