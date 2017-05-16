import React from 'react'

import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

// Import css: webpack wil do it for us
import css from './styles/style.styl'

// Import Components
import Main from './components/Main'
import PhotoGrid from './components/PhotoGrid'
import Single from './components/Single'

const router = (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={PhotoGrid}></IndexRoute>
            <Route path="/view/:postId" component={Single}></Route>
        </Route>
    </Router>
)

render(router, document.getElementById('root'))