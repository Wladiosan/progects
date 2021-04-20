import React from 'react'
import Post from './Post'
import {connect} from 'react-redux'

// eslint-disable-next-line
const Posts = ({syncPost}) => {
    if(!syncPost.length) {
        return <p className="text-center">Постов пока нет</p>
    }
    return syncPost.map(post => <Post post={post} key={post.id}/>)
}

const mapStateToProps = state => {
    return {
        syncPost: state.posts.posts
    }
}

export default connect(mapStateToProps, null)(Posts)