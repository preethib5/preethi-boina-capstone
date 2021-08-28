import React, { Component } from "react";
import BlogItem from "../BlogItem/BlogItem";
import { Link, Redirect } from "react-router-dom";
import image1 from "../../assets/images/img-1.jpg";
import image2 from "../../assets/images/receipe1.jpeg";
import image3 from "../../assets/images/House1.jpg";
import image4 from "../../assets/images/img-4.jpg"
// import image5 from "../../assets/images/img-5.jpg"
import "../Blogs/Blog.scss";
import axios from "axios";

class Blogs extends Component {
  state = {
    blog: [],
    blogDetails:null,
    blogId:""
  };

  getBlogs = () => {
    axios
      .get(`http://localhost:8080/blog`)
      .then((res) => {
        this.setState({
          blog: res.data,
        });
        return res.data[0].id
      })
      //  .then((res)=>{
      //   axios
      //   .get(`http://localhost:8080/post/posts/${res}`)
      //   .then((res) => {
      //     console.log(res.data.posts);
      //     this.setState({
      //       blogDetails: res.data
      //     });
      //   })
      // })
      .catch((err) => {
        console.log(err);
      });


  };
  componentDidMount() {
    this.getBlogs();
  }
  render() {
    return (
      <div className="blogs">
        <h1 className="blogs__text">Check out these EPIC Templates!!!</h1>
        <div className="blogs__container">
        {this.state.blog && (
          this.state.blog.map((blog)=>(
            <div className="blogs__wrapper">
             <ul className="blogs__items">
                <BlogItem
               image={blog.image}
               description={blog.description}
               name={blog.name}
               id={blog.id}
              />
            </ul>
            </div>
         ))
        )} 
        </div>
      </div>
    );
  }
}
export default Blogs;
