import React, { Component } from "react";
import "../AddPost/AddPost.scss";
import Topbar from "../../components/TopBar/Topbar";
import axios from "axios";
import {Redirect} from 'react-router-dom';

class AddPost extends Component {
  state = {
    redirect: false,
    posts: [],
  };
  addPost = (obj) => {
    axios
      .post(`http://localhost:8080/post/1`, {
        title: obj.title,
        content: obj.content,
        image:obj.image
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
    };
    console.log(newPost);
    this.addPost(newPost);
    this.setState({
      redirect: true,
    });
  };

  render (){
    if (this.state.redirect) {
      return <Redirect from="/addpost" to="/blog" />;
    }
    return (
      
      <>
        <Topbar />
        <div className="addpost">
          <h1 className="addpost__title">Add Post</h1>
         
          <form className="addpost__form" onSubmit={this.handleSubmit}>
          {/* <img className="addpost__img" name="image" id="image"  src="" alt="add-img"/> */}
          <div className="addpost__formGroup">              
                <label htmlFor="fileInput">
                <i className="addpost__icon fas fa-plus"></i>
                </label>
              <input type="file" id="fileInput" style={{display:"none"}}/>
              <input className="addpost__input" type="text" placeholder="image" name="image" id="image" autoFocus={true}/>
            </div>
  
            <div className="addpost__formGroup">              
                <label htmlFor="fileInput">
                <i className="addpost__icon fas fa-plus"></i>
                </label>
              <input type="file" id="fileInput" style={{display:"none"}}/>
              <input className="addpost__input" type="text" placeholder="title" name="title" id="title" autoFocus={true}/>
            </div>
  
            <div className="addpost__formGroup">
                <textarea name="content" id="content" className="addpost__input1" type="text" placeholder="Tell your story...."></textarea>
            </div>
  
            <button  className="addpost__submit">Publish</button>
          </form>
        
        </div>
      </>
    );
  }
 
}
export default AddPost;