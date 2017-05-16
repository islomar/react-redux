import React from 'react'

import { render } from 'react-dom';

// Import css: webpack wil do it for us
import css from './styles/style.styl'

// Import Components
import Main from './components/Main'

render(<Main />, document.getElementById('root'))