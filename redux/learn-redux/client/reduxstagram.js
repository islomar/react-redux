import React from 'react'

import { render } from 'react-dom';

// Import css: webpack wil do it for us
import css from './styles/style.styl'

render(<p>hi</p>, document.getElementById('root'))