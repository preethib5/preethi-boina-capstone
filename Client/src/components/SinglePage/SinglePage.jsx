import React, { Component } from "react";
import "../SinglePage/SinglePage.scss";
import { Link } from "react-router-dom";
import Topbar from "../../components/TopBar/Topbar";
import Sidebar from "../../components/SideBar/Sidebar";
import axios from "axios";
import CommentsForm from "../CommentsForm/CommentsForm";
import ShowComment from "../ShowComment//ShowComment";
import DeleteModal from "../Modalpopups/PostDeleteModal";
import ReactReadMoreReadLess from "react-read-more-read-less";

class SinglePage extends Component {
  state = {
    postsData: [],
    deleteModalShow: false,
    commantsPage: false,
    showText: false,
    numberOfLines: 5,
    textLenth: null,
  };

  commentsData = () => {
    axios
      .get(
        `http://localhost:8080/comment/${this.props.match.params.blogid}/${this.props.match.params.postid}`
      )
      .then((response) => {
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

  hideComponent = () => {
    const { commantsPage } = this.state;
    this.setState({ commantsPage: !commantsPage });
  };
  // hideText = () => {
  //   //const {showText} =this.state;
  //   this.state.textLenth
  //     ? this.setState({ numberOfLines: 0 })
  //     : this.setState({ numberOfLines: 5 });
  // };
  // replaceStr=()=> {
  //   const regex = /[.,\/#!$%\^&\*;:{}=\-_`~()]+$/gi;
  //   const result = this.state.postsData.content.replace(regex, "");
  //   this.setState({ result: result });
  //  }

  render() {
    // const regex = /(<([^>]+)>)/gi || '';
    // const result = this.state.postsData.content.replace(regex, "");
// let content = this.state.postsData.content ;
// content= content.replace(... )
const longText = "PUT ON YOUR DEERSTALKER CAP and get out your magnifying glass (or your smartphone, because it’s 2019), it’s mystery time! Part of what makes the world such a wondrous place are the unanswered questions associated with many artifacts and historic locations. Whether it’s a curious contraption from antiquity, or a grimly fascinating unsolved crime, the mysteries of the world keep us guessing, and many of them are tied places you can visit (even if they still refuse to give up their secrets). We recently asked Atlas Obscura readers in our Community forums to tell us about the mysteries that fascinate them, and they led us to some truly enigmatic places.Check out some of our favorite recommendations below, and if you have a mysterious place of your own that you just can’t stop thinking about, head over to our Forums and keep the conversation going. True mysteries might not have easy answers, but you don’t need to be a detective to be fascinated by where they took place.";
    

const {content}=this.state.postsData
const regex = /(<([^>]+)>)/gi;
    const result = longText.replace(regex,"");
// console.log(result)


    let deleteModalClose = () => this.setState({ deleteModalShow: false });
    return (
      <>
        <Topbar />
        <div className="singlepage">
          <div className="singlepage__wrapper">
            <Link to={`/blog/${this.state.postsData.blog_id}`}>
              <i className="singlepage__icon1 fas fa-long-arrow-alt-left fa-2x">
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
                  <i className=" singlepage__icon far fa-edit fa-2x"></i>
                </Link>
                <i
                  className="singlepage__icons"
                  onClick={() => {
                    this.setState({ deleteModalShow: true });
                  }}
                >
                  {this.state.postsData && (
                    <DeleteModal
                      show={this.state.deleteModalShow}
                      postsData={this.state.postsData}
                      deletePost={this.deletePost}
                      onHide={deleteModalClose}
                    />
                  )}
                </i>
              </div>
            </h1>

            <div className="singlepage__info">
              <span className="singlepage__author">
                <b>{this.state.postsData.author}</b>
              </span>
            </div>

        <div>
        <ReactReadMoreReadLess 
              charLimit={200}
              readMoreText={"Read more ▼"}
              readLessText={"Read less ▲"}
              readMoreClassName="read-more-less--more"
              readLessClassName="read-more-less--less"
              className="singlepage__desc"
            >
             {result}
            </ReactReadMoreReadLess>
        </div>
            {/* <p className="singlepage__desc">{this.state.postsData.content}</p> */}
          </div>
          <Sidebar />
        </div>
        <button
          className="singlepage__comment"
          onClick={() => {
            this.hideComponent(this.state.commentsData);
          }}
        >
          ShowComments
        </button>

        {this.state.commantsPage && (
          <>
            <div className="singlepage__commentsection">
              <CommentsForm
                addNewComment={this.addNewComment}
                commentData={this.commentsData}
                commentsData={this.state.commentsData}
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
        )}
      </>
    );
  }
}
export default SinglePage;
