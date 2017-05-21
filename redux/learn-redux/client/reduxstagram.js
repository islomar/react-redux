import React from 'react'

import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

// Import css: webpack wil do it for us
import css from './styles/style.styl'

// Import Components
import App from './components/App'
import PhotoGrid from './components/PhotoGrid'
import Single from './components/Single'
import store, { history } from './store'

import firebase from 'firebase'

import Raven from 'raven-js';
import { sentry_url, logException } from './data/config';

Raven.config(sentry_url).install();

//logException(new Error('download failed!'), {
//    email: 'islomar@gmail.com'
//})

//console.log(store.doesNot.nope())

// If you want to send a simple message to Sentry, without error trace or anything
// You can see it later at the "User Feedback" tab in Sentry
//Raven.captureMessage('Something bad happened');

//It opens crash report pop-up
//Raven.showReportDialog();

firebase.initializeApp({
    apiKey: "AIzaSyCcTk3sTe_nkBzakYw3fqeKYx29XQ_9Zx4",
    authDomain: "reduxstagram-beefb.firebaseapp.com",
    databaseURL: "https://reduxstagram-beefb.firebaseio.com",
    projectId: "reduxstagram-beefb",
    storageBucket: "reduxstagram-beefb.appspot.com",
    messagingSenderId: "901985990745"
})

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={PhotoGrid}></IndexRoute>
                <Route path="/view/:postId" component={Single}></Route>
            </Route>
        </Router>
    </Provider>
)

render(router, document.getElementById('root'))