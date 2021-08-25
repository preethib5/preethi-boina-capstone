import React, { Component } from "react";
import "../Post/Post.scss";
import { Link } from "react-router-dom";

import axios from "axios";
class Post extends Component {
  state = {
    posts: [],
    postTitle: "",
    postContent: "",
    postCreatedDate: "",
    postupdatedDate: "",
    postId:"",
  };
  GetPosts = () => {
    axios
      .get(`http://localhost:8080/post/1`)
      .then((res) => {
        console.log(res.data);
        this.setState({
          posts: res.data,
          postTitle: res.data.map((post) => post.title),
          postContent: res.data.map((post) => post.content),
          postCreatedDate: res.data.map((post) => post.createdDate),
          postId: res.data[0].id,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  componentDidMount() {
    this.GetPosts();
  }

  render() {
    return (
      <>
      {
        this.state.posts.map((post)=>(
          <div className="post">
          <Link to={`/post/${post.id}`} className="post__link">
            <img
              className="post__img"
              src={post.image}
              alt="post-img"
            />
            <div className="post__info">
              <div className="post__cats">
                <span className="post__cat">Travel</span>
                <span className="post__cat">Life</span>
              </div>
              <span className="post__title">{post.title}</span>
              <span className="post__date">
                {post.createdDate}
              </span>
              
            </div>
          </Link>
          <p className="post__desc"></p>
        </div>
        ))
      }
      </>
    );
  }
}
export default Post;
