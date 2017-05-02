import React from 'react'
import { render } from 'react-dom'
import firebase from 'firebase'

firebase.initializeApp({
  apiKey: 'AIzaSyAWv8xklDqHNXLZKXcE9lh0dtvLAmNFytY',
  authDomain: 'curso-react-442d1.firebaseapp.com',
  databaseURL: 'https://curso-react-442d1.firebaseio.com',
  storageBucket: 'curso-react-442d1.appspot.com',
  messagingSenderId: '28219657625'
})

import App from './components/App'

render(<App />, document.getElementById('root'))
