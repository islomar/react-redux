import React, { Component, PropTypes } from 'react'

import Message from '../Message'
import styles from './message-list.css'

const propTypes = {
    messages: PropTypes.arrayOf(PropTypes.object).isRequired,
    onRetweet: PropTypes.func.isRequired,
    onFavorite: PropTypes.func.isRequired,
    onReplyTweet: PropTypes.func.isRequired,
}

class MessageList extends Component {
    constructor (props) {
        super(props)
    }

    render() {
        return (
            <div className={styles.root}>
                {this.props.messages.map( msg => {
                    return (
                        <Message
                            key={msg.id}
                            text={msg.text}
                            picture={msg.picture}
                            displayName={msg.displayName}
                            username={msg.username}
                            date={msg.date}
                            numRetweets={msg.retweets}
                            numFavorites={msg.favorites}
                            onRetweet={() => this.props.onRetweet(msg.id)}
                            onFavorite={() => this.props.onFavorite(msg.id)}
                            onReplyTweet={() => this.props.onReplyTweet(msg.id, msg.username)}
                        />
                    )
                }).reverse()}
            </div>
        )
    }
}

MessageList.propTypes = propTypes

export default MessageList