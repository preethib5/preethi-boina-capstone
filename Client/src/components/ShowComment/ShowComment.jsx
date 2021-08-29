import React, { Component } from "react";
import axios from "axios";
import "./ShowComment.scss";

class ShowComment extends Component {


  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = (id) => {
    const updateLikes = {
      likes:this.props.commentsData.comments[0].likes +1,
    };
    axios
      .put(
        `http://localhost:8080/comment/${this.props.commentsData.comments[0].blog_id}/${this.props.commentsData.comments[0].post_id}/${id}`,
        updateLikes
      )
      .then((response) => {
        this.setState({
          likes: response.data.updatedLike.likes + 1,
          
        })
        this.props.commentData()
        
      })
      .catch((err) => {
        console.log(err);
      });
  };
  deleteComment = (blogid, postid, commentid) => {
    axios
      .delete(`http://localhost:8080/comment/${blogid}/${postid}/${commentid}`)
      .then((res) => {
        this.props.commentData()
        this.props.history.push(`/post/${blogid}/${postid}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // handleSubmit = (e) => {
  //   e.preventDefault();

  //   this.deleteComment();
  // };

  render() {
    return (
      <>
        <section className="container">
          <div className="container__commentBox">
            {this.props.commentsData.comments.map((comment) => (
              <>
                <div className="container__leftPanelImg">
                  <img
                    className="container__leftPanelImg--img"
                    src={comment.image}
                    alt="grayProfileImage"
                  />
                </div>
                <div className="container__rightPanel">
                  <span className="container__rightPanel--name">
                    {comment.name}
                  </span>
                  <div className="container__rightPanel--date">
                    {/* {Moment(com.timestamp).format("MM/DD/YYYY")}  */}
                    {comment.createdDate}
                  </div>
                </div>
                <div className="container__comment">
                  <p className="container__comment--para">{comment.comment}</p>
                </div>
                <div className="container__links">
                  <i
                    className="container__icon far fa-thumbs-up fa-2x"
                    name="likes"
                    id="likes"
                    onChange={this.handleChange}
                    onClick={() => {
                      this.handleSubmit(comment.id);
                    }}
                  >
                    {comment.likes}
                  </i>
                  <i
                    className="container__icons far fa-trash-alt fa-2x"
                    onClick={() =>
                      this.deleteComment(
                        comment.blog_id,
                        comment.post_id,
                        comment.id
                      )
                    }
                  ></i>
                </div>
              </>
            ))}
          </div>
        </section>
      </>
    );
  }
}

export default ShowComment;
