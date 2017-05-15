import React from 'react'
import { render } from 'react-dom'
import firebase from 'firebase'

firebase.initializeApp({
    apiKey: "AIzaSyDS-7ak0oSxCZ20BySC4NtZCbSa4-kRYfQ",
    authDomain: "curso-react-17251.firebaseapp.com",
    databaseURL: "https://curso-react-17251.firebaseio.com",
    projectId: "curso-react-17251",
    storageBucket: "curso-react-17251.appspot.com",
    messagingSenderId: "730877246086"
})

import App from './components/App'

render(<App />, document.getElementById('root'))