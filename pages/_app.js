import { Amplify } from 'aws-amplify'
import awsmobile from '../src/aws-exports'
import {Authenticator} from '@aws-amplify/ui-react'
// import '@/styles/globals.css'
import '@aws-amplify/ui-react/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';


Amplify.configure({...awsmobile,ssr:true})

export default function App({ Component, pageProps }) {
  return (
  <Authenticator>
  <Component {...pageProps} />
  </Authenticator>
  
  
  )
}
