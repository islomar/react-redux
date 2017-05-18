import React, { Component } from 'react';
import Photo from './Photo';
import Comments from './Comments';

class Single extends Component {
    render() {
        const index = this.props.posts.findIndex( (post) => post.code === this.props.params.postId );
        console.log(index);
        const post = this.props.posts[index];
        console.log(post);

        return (
            <div className="single-photo">
                <Photo index={index} post={post} {...this.props} />
                <Comments />
            </div>
        )
    }
}

export default Single;