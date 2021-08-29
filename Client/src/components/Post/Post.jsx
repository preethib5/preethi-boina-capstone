import React, { Component } from "react";
import "../Post/Post.scss";
import { Link } from "react-router-dom";

import axios from "axios";
import Header from "../Header/Header";
import Sidebar from "../SideBar/Sidebar";
class Post extends Component {
  state = {
    posts: [],
    postTitle: "",
    postContent: "",
    postCreatedDate: "",
    postupdatedDate: "",
    postId:"",
    postDetails:null
  };
  GetPosts = () => {
    axios
        .get(`http://localhost:8080/post/${this.props.match.params.id}`)
        .then((res) => {
          this.setState({
            postDetails: res.data.posts,
            postId:res.data.id
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
        <Header/>
        <h1></h1>
        <Link to={`/addpost/${this.props.match.params.id}`} ><i className="icon far fa-plus-square fa-2x"> Add Post</i></Link>
     <div className="singlepost">     
     { this.state.postDetails &&
      this.state.postDetails.map((post)=>(
        <div className="post">
        <Link to={`/post/${post.blog_id}/${post.id}`} className="post__link">
          <img
            className="post__img"
            src={post.image}
            alt="post-img"
          />
          <div className="post__info">
            <div className="post__cats">
              <span className="post__cat">Adventure</span>
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
     <Sidebar/>
     </div>
       
      </>
    );
  }
}
export default Post;
