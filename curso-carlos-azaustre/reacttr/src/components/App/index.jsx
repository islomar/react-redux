import React, { Component } from 'react'
import 'normalize-css'

import styles from './app.css'
import Header from '../Header'
import Main from '../Main'

class App extends Component {
    constructor () {
        super()
        this.state = {
            user: {
                photoURL: 'https://pbs.twimg.com/profile_images/531448490954469376/ndNK81ZW_400x400.jpeg',
                email: 'islomar@gmail.com',
                displayName: 'Isidro López',
                onOpenText: false
            }
        }
    }

    render () {
        return (
            <div>
                <Header />
                <Main user={this.state.user}/>
            </div>
        )
    }
}

export default App