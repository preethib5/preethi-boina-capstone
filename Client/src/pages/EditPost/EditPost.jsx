import React, { Component } from 'react'
import Topbar from "../../components/TopBar/Topbar";
import axios from "axios";
class EditPost extends Component{

    state = {
        title: "",
        content: "",
      };
    componentDidMount() {
        axios
          .get(`http://localhost:8080/post/${this.props.match.params.id}`)
          .then((response) => {
            this.setState({
                title: response.data[0].title,
                content: response.data[0].content,
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
            <div className="addpost">
            <h1>Edit Post</h1>
                <img className="addpost__img" src="http://amolife.com/en/wp-content/uploads/2016/11/nature____________.jpg" alt="add-img"/>
              <form className="addpost__form" onSubmit={this.handleSubmit}>
                <div className="addpost__formGroup">
                    <label htmlFor="fileInput">
                    <i className="addpost__icon fas fa-plus"></i>
                    </label>
                  <input type="file" id="fileInput" style={{display:"none"}}/>
                  <input className="addpost__input" type="text" placeholder="title"
                   name="title" id="title"
                   defaultValue={this.state.title}
                   onChange={this.handleChange}
                    autoFocus={true}/>
                </div>
      
                <div className="addpost__formGroup">
                    <textarea name="content" id="content" className="addpost__input1" type="text" 
                     defaultValue={this.state.content}
                     onChange={this.handleChange}
                    placeholder="Tell your story...."></textarea>
                </div>
      
                <button  className="addpost__submit">Publish</button>
              </form>
            
            </div>
          </>
        )
    }
}
export default EditPost