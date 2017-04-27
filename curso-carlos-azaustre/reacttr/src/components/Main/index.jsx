import React, { Component } from 'react'
import uuid from 'uuid'
import MessageList from '../MessageList'
import InputText from '../InputText'
import ProfileBar from '../ProfileBar'

class Main extends Component {
    constructor () {
        super()
        this.state = {
            messages: [{
                id: uuid.v4(),
                text: 'Mensaje del Tweet',
                picture: 'https://pbs.twimg.com/profile_images/531448490954469376/ndNK81ZW_400x400.jpeg',
                displayName: 'Isidro López',
                username: 'islomar',
                date: Date.now() - 180000
            },
            {
                id: uuid.v4(),
                text: 'Este es un nuevo mensaje',
                picture: 'https://pbs.twimg.com/profile_images/531448490954469376/ndNK81ZW_400x400.jpeg',
                displayName: 'Isidro López',
                username: 'islomar',
                date: Date.now() - 1800000
            }]
        }

        this.handleSendText = this.handleSendText.bind(this)
        this.handleCloseText = this.handleCloseText.bind(this)
        this.handleOpenText = this.handleOpenText.bind(this)
    }

    handleSendText (event) {
        event.preventDefault()
        let newMessage = {
            id: uuid.v4(),
            username: this.props.user.email.split('@')[0],
            displayName: this.props.user.displayName,
            date: Date.now(),
            text: event.target.text.value
        }
        console.log(newMessage)
    }

    handleCloseText (event) {
        event.preventDefault()
        this.setState({ openText: false })
    }

    handleOpenText (event) {
        event.preventDefault()
        this.setState({ openText: true })
    }

    renderOpenText () {
        if (this.state.openText) {
            return (
                <InputText
                    onSendText={this.handleSendText}
                    onCloseText={this.handleCloseText}
                />
            )
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
                {this.renderOpenText()}
                <MessageList messages={this.state.messages} />
            </div>
        )
    }
}

export default Main