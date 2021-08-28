import React, { Component } from "react";
import "../SinglePage/SinglePage.scss";
import { Link } from "react-router-dom";
import Topbar from '../../components/TopBar/Topbar';
import Sidebar from '../../components/SideBar/Sidebar';
import axios from "axios";
class SinglePage extends Component {
  state = {
    postsData:[],
  };
  componentDidMount() {
    
    axios
      .get(`http://localhost:8080/post/${this.props.match.params.blogid}/${this.props.match.params.postid}`)
      .then((response) => {
        this.setState({
          postsData:response.data.posts,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  deletePost= (blogid,postid)=>{
     // e.preventDefault();
    //const blogid = this.state.id;
    axios
      .delete(
        `http://localhost:8080/post/${blogid}/${postid}`)
      .then((res) => {
        this.props.history.goBack();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <>
       <Topbar/>
      <div className="singlepage">
         <div className="singlepage__wrapper">
         <Link to={`/blog/${this.state.postsData.blog_id}`} ><i class="singlepage__icon1 fas fa-long-arrow-alt-left fa-4x"> go back</i></Link>
          <img
            className="singlepage__img"
            src={this.state.postsData.image}
            alt="post-img"
          />
          <h1 className="singlepage__title">
            {this.state.postsData.title}
            <div className="singlepage__edit">
              <Link
                to={`/editpost/${this.state.postsData.blog_id}/${this.state.postsData.id}`}
                className=" singlepage__link"
              >
                <i className=" singlepage__icon far fa-edit"></i>
              </Link>
                <i className="singlepage__icons far fa-trash-alt" onClick={()=> {this.deletePost(this.state.postsData.blog_id,this.state.postsData.id)}}></i>
            </div>
          </h1>

          <div className="singlepage__info">
            <span className="singlepage__author">
              Author: <b>{this.state.postsData.author}</b>
            </span>
            <span className="singlepage__date">
              {this.state.postsData.postCreatedDate}
            </span>
          </div>
          <p className="singlepage__desc">{this.state.postsData.content}</p>
        </div>
      </div>
      </>
    );
  }
}
export default SinglePage;
