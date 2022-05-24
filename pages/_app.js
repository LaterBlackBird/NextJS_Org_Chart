import Layout from '../components/molecules/Layout'
import { ToastProvider } from 'react-toast-notifications'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <ToastProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ToastProvider>
  )
}

export default MyApp
