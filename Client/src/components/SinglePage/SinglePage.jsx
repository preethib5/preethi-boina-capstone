import React, { Component } from "react";
import "../SinglePage/SinglePage.scss";
import { Link } from "react-router-dom";
import Topbar from "../../components/TopBar/Topbar";
import Sidebar from "../../components/SideBar/Sidebar";
import axios from "axios";
import CommentsForm from "../CommentsForm/CommentsForm";
import ShowComment from "../ShowComment//ShowComment";
import DeleteModal from "../DeleteModal/PostDeleteModal";
class SinglePage extends Component {
  state = {
    postsData: [],
    deleteModalShow: false,
  };

  commentsData = () => {
    axios
      .get(
        `http://localhost:8080/comment/${this.props.match.params.blogid}/${this.props.match.params.postid}`
      )
      .then((response) => {
        console.log(response.data);
        this.setState({
          commentsData: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  componentDidMount() {
    axios
      .get(
        `http://localhost:8080/post/${this.props.match.params.blogid}/${this.props.match.params.postid}`
      )
      .then((response) => {
        this.setState({
          postsData: response.data.posts,
        });
      })
      .catch((err) => {
        console.log(err);
      });
    this.commentsData();
  }

  deletePost = (blogid, postid) => {
    debugger
    // e.preventDefault();
    //const blogid = this.state.id;
    axios
      .delete(`http://localhost:8080/post/${blogid}/${postid}`)
      .then((res) => {
        this.props.history.goBack();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  addNewComment = (obj) => {
    axios
      .post(
        `http://localhost:8080/comment/${this.props.match.params.blogid}/${this.props.match.params.postid}`,
        {
          name: obj.name,
          comment: obj.comment,
        }
      )
      .then((res) => {
        this.setState({
          commentsData: res.data,
          // commentId: res.data[0].id,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.deleteComment();
  };

  render() {
    let deleteModalClose = () => this.setState({ deleteModalShow: false });
    return (
      <>
        <Topbar />
        <div className="singlepage">
          <div className="singlepage__wrapper">
            <Link to={`/blog/${this.state.postsData.blog_id}`}>
              <i class="singlepage__icon1 fas fa-long-arrow-alt-left fa-4x">
                go back
              </i>
            </Link>
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
                <i
                  className="singlepage__icons"
                  onClick={() => {
                    this.setState({ deleteModalShow: true });
                  }}
                >
                  <DeleteModal
                    show={this.state.deleteModalShow}
                    postsData={this.state.postsData}
                    deletePost={this.deletePost}
                    onHide={deleteModalClose}
                  />
                </i>
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
        <div className="singlepage__commentsection">
          <CommentsForm
            commentData={this.state.commentData}
            addNewComment={this.addNewComment}
          />
          {this.state.commentsData && (
            <ShowComment
              commentsData={this.state.commentsData}
              commentData={this.commentsData}
              deleteComment={this.handleSubmit}
            />
          )}
        </div>
      </>
    );
  }
}
export default SinglePage;
