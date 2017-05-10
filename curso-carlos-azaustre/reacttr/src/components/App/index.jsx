import React, { Component } from 'react'
import { HashRouter, Match } from 'react-router'
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
            <HashRouter>
                <div>
                    <Header />

                    <Match exactly pattern='/' render={ () => {
                        if (this.state.user) {
                            return (
                                <Main user={this.state.user}/>
                            )
                        } else {
                            // Render <Login />
                        }
                    }} />

                    <Match pattern='/profile' render={ () => {
                            // Render <Profile />
                    }} />

                    <Match pattern='/user/:username' render={ ({ params }) => {
                            // Render <Profile /> pasando params.username
                    }} />
                </div>
            </HashRouter>
        )
    }
}

export default App