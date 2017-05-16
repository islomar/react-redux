import React from 'react'

import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

// Import css: webpack wil do it for us
import css from './styles/style.styl'

// Import Components
import Main from './components/Main'
import PhotoGrid from './components/PhotoGrid'
import Single from './components/Single'

render(<Main />, document.getElementById('root'))