import React, { Component } from 'react'
import MessageList from '../MessageList'

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
    render() {
        return (
            <MessageList messages={this.state.messages} />
        )
    }
}

export default Main