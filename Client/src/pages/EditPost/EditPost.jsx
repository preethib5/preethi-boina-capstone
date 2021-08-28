import React, { Component } from "react";
import Topbar from "../../components/TopBar/Topbar";
import { Link } from "react-router-dom";
import "../EditPost/EditPost.scss";
import axios from "axios";
class EditPost extends Component {
  state = {
    title: "",
    content: "",
    image: "",
    author: "",
    postsData:[]
  };
  componentDidMount() {
    axios
      .get(`http://localhost:8080/post/${this.props.match.params.blogid}/${this.props.match.params.postid}`)
      .then((response) => {
        this.setState({
          postsData: response.data.posts,
          title: response.data.posts.title,
          content: response.data.posts.content,
          image: response.data.posts.image,
          author: response.data.posts.author,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const updatePost = {
      //must match state properties
      title: this.state.title,
      content: this.state.content,
      author: this.state.author,
    };
    axios
      .put(
        `http://localhost:8080/post/${this.props.match.params.blogid}/${this.props.match.params.postid}`,
        updatePost
      )
      .then((response) => {
        this.setState({
          title: response.data.updatedPost.title,
          content: response.data.updatedPost.content,
          author: response.data.updatedPost.author,
        });
        this.props.history.push(`/post/${this.props.match.params.blogid}/${this.props.match.params.postid}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <>
        <Topbar />
        <div className="editpost">
       <div className="editpost__flex">
       <Link to={`/post/${this.state.postsData.blog_id}/${this.state.postsData.id}`} ><i class="editpost__icon1 fas fa-long-arrow-alt-left fa-4x"> go back</i></Link>
          <h1 className="editpost__title">Edit Post</h1>
       </div>
          <img
            className="editpost__img"
            src={this.state.image}
            alt="edit-img"
          />
          <form className="editpost__form" onSubmit={this.handleSubmit}>
            <div className="editpost__formGroup">
              <label htmlFor="fileInput">
                <i className="editpost__icon fas fa-plus"></i>
              </label>
              <input type="file" id="fileInput" style={{ display: "none" }} />
              <input
                className="editpost__input"
                type="text"
                placeholder="title"
                name="title"
                id="title"
                defaultValue={this.state.title}
                onChange={this.handleChange}
                autoFocus={true}
              />
            </div>
            <div className="editpost__formGroup">
              <input
                name="author"
                id="author"
                className="editpost__input2"
                type="text"
                defaultValue={this.state.author}
                onChange={this.handleChange}
                placeholder="Name of the Author...."
              />
            </div>

            <div className="editpost__formGroup">
              <textarea
                name="content"
                id="content"
                className="editpost__input1"
                type="text"
                defaultValue={this.state.content}
                onChange={this.handleChange}
                placeholder="Tell your story...."
              ></textarea>
            </div>

            <button className="editpost__submit">Publish</button>
          </form>
        </div>
      </>
    );
  }
}
export default EditPost;
