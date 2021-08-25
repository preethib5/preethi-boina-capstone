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
    postsData:[]
  };
  componentDidMount() {
    axios
      .get(`http://localhost:8080/post`)
      .then((response) => {
        this.setState({
          title: response.data[0].title,
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
        <div className="singlepage__wrapper">
          <img
            className="singlepage__img"
            src="https://www.lux-review.com/wp-content/uploads/2020/05/enjoy-life-1920-x-1080.jpg"
            alt="post-img"
          />
          <h1 className="singlepage__title">
            {this.state.title}
            <div className="singlepage__edit">
              <Link
                to={`/editpost/${this.state.id}`}
                className=" singlepage__link"
              >
                <i className=" singlepage__icon far fa-edit"></i>
              </Link>
              <Link to={`/blog`} className=" singlepage__links">
                <i className="singlepage__icon far fa-trash-alt" onClick={()=> {this.deletePost(this.state.id)}}></i>
              </Link>
            </div>
          </h1>

          <div className="singlepage__info">
            <span className="singlepage__author">
              Author:<b>Preethi</b>
            </span>
            <span className="singlepage__date">
              {this.state.postCreatedDate}
            </span>
          </div>
          <p className="singlepage__desc">{this.state.content}</p>
        </div>
      </div>
    );
  }
}
export default SinglePage;
