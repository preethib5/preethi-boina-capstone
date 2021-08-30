import React, { Component } from "react";
import "../AddPost/AddPost.scss";
import Topbar from "../../components/TopBar/Topbar";
import axios from "axios";
import { Redirect } from "react-router-dom";

class AddPost extends Component {
  state = {
    posts: [],
  };
  addPost = (obj) => {
    axios
      .post(`http://localhost:8080/post/${this.props.match.params.id}`, {
        title: obj.title,
        content: obj.content,
        image: obj.image,
        author: obj.author,
      })
      .then((res) => {
        this.setState({
          posts: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      title: e.target.title.value,
      content: e.target.content.value,
      image: e.target.image.value,
      author: e.target.author.value,
    };
    this.addPost(newPost);
    this.props.history.goBack();
  
  };

  render() {

    return (
      <>
        <Topbar />
        <div className="addpost">
          <h1 className="addpost__title">Add Post</h1>

          <form className="addpost__form" onSubmit={this.handleSubmit}>
            <div className="addpost__formGroup">
              <label htmlFor="fileInput">
                <i className="addpost__icon fas fa-plus"></i>
              </label>
              <input type="file" id="fileInput" style={{ display: "none" }} />
              <input
                className="addpost__input"
                type="text"
                placeholder="Image"
                name="image"
                id="mage"
                autoFocus={true}
              />
            </div>

            <div className="addpost__formGroup1">
              <label htmlFor="fileInput">
                <i className="addpost__icon fas fa-plus"></i>
              </label>
              <input type="file" id="fileInput" style={{ display: "none" }} />
              <input
                className="addpost__input"
                type="text"
                placeholder="Title of your Post"
                name="title"
                id="title"
                autoFocus={true}
              />
            </div>

            <div className="addpost__formGroup">
              <input
                name="author"
                id="author"
                className="addpost__input2"
                type="text"
                //defaultValue={this.state.author}
               // onChange={this.handleChange}
                placeholder="Name of the Author...."
              />
            </div>

            <div className="addpost__formGroup">
              <textarea
                name="content"
                id="content"
                className="addpost__input1"
                type="text"
                placeholder="Tell your story...."
              ></textarea>
            </div>

            <button className="addpost__submit" onClick={() => window.location.reload(false)}>Publish</button>
          </form>
        </div>
      </>
    );
  }
}
export default AddPost;
