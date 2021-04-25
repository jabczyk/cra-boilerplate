import React, { useState, useEffect } from 'react'
import { IntlProvider as ReactIntlProvider } from 'react-intl'
import { messages } from '../../lib/i18n'

export const IntlProvider: React.FC = ({ children }) => {
  const [locale, setLocale] = useState('en-US')

  useEffect(() => {
    const locale = [...navigator.languages, navigator.language].find(
      (locale) => messages[locale]
    )

    if (locale) setLocale(locale)
  }, [setLocale])

  return (
    <ReactIntlProvider
      messages={messages[locale]}
      locale={locale}
      defaultLocale="en-US">
      {children}
    </ReactIntlProvider>
  )
}
