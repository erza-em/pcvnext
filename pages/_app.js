import Layout from '../components/Layout'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/general.scss'

import AppContext from '../components/AppContext'


export default function MyApp({ Component, pageProps }) {
  return (
      <Layout pageTitle={pageProps.pageTitle}>
        <Component {...pageProps} />
      </Layout>

  )
}



