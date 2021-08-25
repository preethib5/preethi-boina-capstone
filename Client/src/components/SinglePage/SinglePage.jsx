import React, { Component } from "react";
import "../SinglePage/SinglePage.scss";
import { Link } from "react-router-dom";
import axios from "axios";
class SinglePage extends Component {
  state = {
    title: "",
    content: "",
    id: "",
    postCreatedDate: "",
    postupdatedDate: "",
    postsData:[],
    image:""
  };
  componentDidMount() {
    debugger
    axios
      .get(`http://localhost:8080/post/1`)
      .then((response) => {
        this.setState({
          postsData:response.data,
          title: response.data[0].title,
          image: response.data[0].image,
          content: response.data[0].content,
          id: response.data[0].id,
          postCreatedDate: response.data[0].createdDate,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  deletePost= (id)=>{
     // e.preventDefault();
   // const postid = this.state.id;
    axios
      .delete(
        `http://localhost:8080/post/${id}`
      )
      .then((res) => {
          console.log(res.data);
              this.setState({
                postsData:res.data,
                id:res.data[0].id,
           })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="singlepage">
        {
          this.state.postsData.filter((post)=>post.id ===this.state.id).map((post)=>(
            <div className="singlepage__wrapper">
          <img
            className="singlepage__img"
            src={post.image}
            alt="post-img"
          />
          <h1 className="singlepage__title">
            {post.title}
            <div className="singlepage__edit">
              <Link
                to={`/editpost/${post.id}`}
                className=" singlepage__link"
              >
                <i className=" singlepage__icon far fa-edit"></i>
              </Link>
              <Link to={`/blog`} className=" singlepage__links">
                <i className="singlepage__icon far fa-trash-alt" onClick={()=> {this.deletePost(post.id)}}></i>
              </Link>
            </div>
          </h1>

          <div className="singlepage__info">
            <span className="singlepage__author">
              Author:<b>Preethi</b>
            </span>
            <span className="singlepage__date">
              {post.postCreatedDate}
            </span>
          </div>
          <p className="singlepage__desc">{post.content}</p>
        </div>
          ))
        }
      </div>
    );
  }
}
export default SinglePage;
