import React from 'react'
import "../Posts/Posts.scss"
import Post from "../Post/Post"

export default function Posts() {
    return (
        <div className="posts">
          <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}
