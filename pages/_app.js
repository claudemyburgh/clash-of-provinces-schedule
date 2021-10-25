import '../styles/globals.css'

import { TimezoneProvider } from '../context/TimezoneContext'
import TopNav from '../components/nav/TopNav'

function MyApp({ Component, pageProps }) {
  return (
    <TimezoneProvider>
      <TopNav />
      <Component {...pageProps} />
    </TimezoneProvider>
  )
}

export default MyApp
