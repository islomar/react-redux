import React, { Component } from 'react'
import MessageList from '../MessageList'
import InputText from '../InputText'
import ProfileBar from '../ProfileBar'

class Main extends Component {
    constructor () {
        super()
        this.state = {
            messages: [{
                text: 'Mensaje del Tweet',
                picture: 'https://pbs.twimg.com/profile_images/531448490954469376/ndNK81ZW_400x400.jpeg',
                displayName: 'Isidro López',
                username: 'islomar',
                date: Date.now() - 180000
            },
            {
                text: 'Este es un nuevo mensaje',
                picture: 'https://pbs.twimg.com/profile_images/531448490954469376/ndNK81ZW_400x400.jpeg',
                displayName: 'Isidro López',
                username: 'islomar',
                date: Date.now() - 1800000
            }]
        }
    }

    handleOpenText (event) {
        event.preventDefault()
        this.setState({ openText: true })
    }

    renderOpenText () {
        if (this.state.openText) {
            return <InputText />
        }
    }

    render() {
        return (
            <div>
                <ProfileBar
                    picture={this.props.user.photoURL}
                    username={this.props.user.email.split('@')[0]}
                    onOpenText={this.handleOpenText}
                />
                {this.renderOperText()}
                <MessageList messages={this.state.messages} />
            </div>
        )
    }
}

export default Main