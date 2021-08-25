import React, { Component } from 'react'
import Topbar from "../../components/TopBar/Topbar";
import "../EditPost/EditPost.scss"
import axios from "axios";
class EditPost extends Component{

    state = {
        title: "",
        content: "",
        image:""
      };
    componentDidMount() {
        axios
          .get(`http://localhost:8080/post/${this.props.match.params.id}`)
          .then((response) => {
            this.setState({
                title: response.data[0].title,
                content: response.data[0].content,
                image:response.data[0].image,
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
        debugger
        event.preventDefault();
        const updatePost = {
          //must match state properties
          title: this.state.title,
          content: this.state.content,
        };
        console.log(this.props.match.params.id)
        axios
          .put(`http://localhost:8080/post/${this.props.match.params.id}`, updatePost)
          .then((response) => {
            this.setState({
                title: response.data.title,
                content: response.data.content,
            });
           this.props.history.push(`/post/${this.props.match.params.id}`);
          })
          .catch((err) => {
            console.log(err);
          });
      };
    render(){

        return(
            <>
            <Topbar />
            <div className="editpost">
            <h1>Edit Post</h1>
                <img className="editpost__img" src={this.state.image} alt="edit-img"/>
              <form className="editpost__form" onSubmit={this.handleSubmit}>
                <div className="editpost__formGroup">
                    <label htmlFor="fileInput">
                    <i className="editpost__icon fas fa-plus"></i>
                    </label>
                  <input type="file" id="fileInput" style={{display:"none"}}/>
                  <input className="editpost__input" type="text" placeholder="title"
                   name="title" id="title"
                   defaultValue={this.state.title}
                   onChange={this.handleChange}
                    autoFocus={true}/>
                </div>
      
                <div className="editpost__formGroup">
                    <textarea name="content" id="content" className="editpost__input1" type="text" 
                     defaultValue={this.state.content}
                     onChange={this.handleChange}
                    placeholder="Tell your story...."></textarea>
                </div>
      
                <button  className="editpost__submit">Publish</button>
              </form>
            
            </div>
          </>
        )
    }
}
export default EditPost