import React, { Component, PropTypes } from 'react'
import uuid from 'uuid'
import firebase from 'firebase'
import MessageList from '../MessageList'
import InputText from '../InputText'
import ProfileBar from '../ProfileBar'

const propTypes = {
    user: PropTypes.object.isRequired,
    onLogout: PropTypes.func.isRequired
}

class Main extends Component {
    constructor (props) {
        super(props)
        this.state = {
            user: Object.assign({}, this.props.user, {retweets: []}, {favorites: []}),
            openText: false,
            userNameToReply: '', // best practices, indeed it is not needed
            messages: [{
                id: uuid.v4(),
                text: 'Mensaje del Tweet',
                picture: 'https://pbs.twimg.com/profile_images/531448490954469376/ndNK81ZW_400x400.jpeg',
                displayName: 'Isidro López',
                username: 'islomar',
                date: Date.now() - 180000,
                retweets: 0,
                favorites: 0
            },
            {
                id: uuid.v4(),
                text: 'Este es un nuevo mensaje',
                picture: 'https://pbs.twimg.com/profile_images/531448490954469376/ndNK81ZW_400x400.jpeg',
                displayName: 'Isidoro',
                username: 'Isidoro',
                date: Date.now() - 1800000,
                retweets: 0,
                favorites: 0
            }]
        }

        this.handleSendText = this.handleSendText.bind(this)
        this.handleCloseText = this.handleCloseText.bind(this)
        this.handleOpenText = this.handleOpenText.bind(this)
        this.handleRetweet = this.handleRetweet.bind(this)
        this.handleFavorite = this.handleFavorite.bind(this)
        this.handleReplyTweet = this.handleReplyTweet.bind(this)
    }

    componentWillMount() {
        const messagesRef = firebase.database().ref().child('messages') //create a child with name 'messages' (object inside the DB)
        messagesRef.on('child_added', snapshot => { //'child_added' is a Firebase event triggered when a child is added (sic)
            this.setState({
                messages: this.state.messages.concat(snapshot.val()),
                openText: false
            })
        })
    }

    handleSendText (event) {
        event.preventDefault()
        let newMessage = {
            id: uuid.v4(),
            username: this.props.user.email.split('@')[0],
            displayName: this.props.user.displayName,
            picture: this.props.user.photoURL,
            date: Date.now(),
            text: event.target.text.value,
            favorites: 0,
            retweets: 0
        }

        const messageRef = firebase.database().ref().child('messages')
        const messageId = messageRef.push()
        messageId.set(newMessage)
    }

    handleCloseText (event) {
        event.preventDefault()
        this.setState({ openText: false })
    }

    handleOpenText (event) {
        event.preventDefault()
        this.setState({ openText: true })
    }

    handleRetweet (msgId) {
        let alreadyRetweeted = this.state.user.retweets.filter(rt => rt === msgId)

        if (alreadyRetweeted.length === 0) {
            let messages = this.state.messages.map(msg => {
                if (msg.id === msgId) {
                    msg.retweets++
                }
                return msg
            })

            let user = Object.assign({}, this.state.user)
            user.retweets.push(msgId)
            this.setState({
                messages,
                user
            })
        }
    }

    handleFavorite (msgId) {
        let alreadyFavorited = this.state.user.favorites.filter(fav => fav === msgId)

        if (alreadyFavorited.length === 0) {
            let messages = this.state.messages.map(msg => {
                if (msg.id === msgId) {
                    msg.favorites++
                }
                return msg
            })

            let user = Object.assign({}, this.state.user)
            user.favorites.push(msgId)
            this.setState({
                messages,
                user
            })
        }
    }

    handleReplyTweet (msgId, userNameToReply) {
        this.setState({
            openText: true,
            userNameToReply
        })
    }

    renderOpenText () {
        if (this.state.openText) {
            return (
                <InputText
                    onSendText={this.handleSendText}
                    onCloseText={this.handleCloseText}
                    userNameToReply={this.state.userNameToReply}
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
                    onLogout={this.props.onLogout}
                />
                {this.renderOpenText()}
                <MessageList
                    messages={this.state.messages}
                    onRetweet={this.handleRetweet}
                    onFavorite={this.handleFavorite}
                    onReplyTweet={this.handleReplyTweet}
                />
            </div>
        )
    }
}

Main.propTypes = propTypes

export default Main