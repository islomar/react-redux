import React, { Component } from 'react'
import { HashRouter, Match } from 'react-router'
import firebase from 'firebase'
import 'normalize-css'

import styles from './app.css'
import Header from '../Header'
import Main from '../Main'
import Profile from '../Profile'
import Login from '../Login'

class App extends Component {
    constructor () {
        super()
        this.state = {
            user: {
                photoURL: 'https://pbs.twimg.com/profile_images/531448490954469376/ndNK81ZW_400x400.jpeg',
                email: 'islomar@gmail.com',
                displayName: 'Isidro López',
                location: 'Madrid, España',
                onOpenText: false
            }
        }

        this.handleOnAuth = this.handleOnAuth.bind(this)
    }

    handleOnAuth () {
        const provider = new firebase.app.GithubAuthProvider()

        firebase.auth.signInWithPopup()
            .then( result => console.log(`${result.user.email} ha iniciado sesión`) )
            .catch( error => console.error(`Error: ${error.code}: ${error.message}`))
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
                            return (
                                <Login onAuth={this.handleOnAuth} />
                            )
                        }
                    }} />

                    {/* instead of using { and return, you can use the normal parenthese */}
                    <Match pattern='/profile' render={ () => (
                        <Profile
                            picture={this.state.user.photoURL}
                            username={this.state.user.email.split('@')[0]}
                            displayName={this.state.user.displayName}
                            location={this.state.user.location}
                            emailAddress={this.state.user.email}
                        />
                    )} />

                    <Match pattern='/user/:username' render={ ({ params }) => {
                        return (
                            <Profile
                                displayName={params.username}
                                username={params.username}
                            />
                        )
                    }} />
                </div>
            </HashRouter>
        )
    }
}

export default App