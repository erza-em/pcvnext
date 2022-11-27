import Layout from '../components/Layout'
import 'bootstrap/dist/css/bootstrap.css'
import 'datatables.net-dt/css/jquery.dataTables.min.css'
import '../styles/globals.scss'

// import {useState, createContext} from 'react'
import AppContext from '../components/AppContext'



export default function MyApp({ Component, pageProps }) {

  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>

  )
}



