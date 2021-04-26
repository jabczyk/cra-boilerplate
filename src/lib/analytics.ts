import ReactGA from 'react-ga'
import { Metric } from 'web-vitals'
import reportWebVitals from './reportWebVitals'

if (process.env.REACT_APP_GA_TRACKING_ID) {
  ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID)
  ReactGA.pageview(window.location.pathname + window.location.search)

  reportWebVitals((metric: Metric) => {
    ReactGA.event({
      category: 'Web Vitals',
      action: metric.name,
      value: ~~(
        // values must be integers
        (metric.name === 'CLS' ? metric.value * 1000 : metric.value)
      ),
      label: metric.id,
      nonInteraction: true
    })
  })
}
