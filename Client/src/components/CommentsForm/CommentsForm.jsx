import React, { Component } from "react";
import "../CommentsForm/CommentForm.scss";

class CommentsForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      name: e.target.name.value,
      comment: e.target.comment.value,
    };
    this.props.addNewComment(newComment);
    this.props.commentData()
   // this.props.history.push(`/post/${blogid}/${postid}`);
  };
  render() {
    return (
      <>
       
        <form className="comment-form" onSubmit={this.handleSubmit}>
        <h4 className="comments">
           {this.props.commentsData.comments.length} Comments
         </h4>
          <div className="comment-form__section1">
            <img
              className="comment-form__image"
              src="https://www.patrioticretirementclub.com/wp-content/uploads/2021/08/hawaii-governor-02.jpg"
              alt="profile"
            />
            <h1 className="comment-form__header">JOIN THE CONVERSATION</h1>
          </div>
          <div className="comment-form__formGroup">
            <label className="comment-form__name" htmlFor="name">
            <input
              className="comment-form__input"
              type="text"
              placeholder="Full Name"
              name="name"
              id="name"
            />   </label>
          </div>

          <div className="comment-form__formGroup1">
            <label className="comment-form__comment" htmlFor="comment">
              <textarea
                className="comment-form__comment--textArea"
                rows="5"
                col="30"
                id="comment"
                name="comment"
                placeholder="Add a new comment"
              ></textarea>
            </label>
            <button
              className="comment-form__btn"
              type="submit"
              id="submit"
              onClick={() => window.location.reload(false)}
            >
              ADD COMMENT
            </button>
          </div>
        </form>
      </>
    );
  }
}

export default CommentsForm;
