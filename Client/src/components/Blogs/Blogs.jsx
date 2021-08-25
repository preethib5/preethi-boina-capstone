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
    blogName: "",
    blogDescription: "",
    blogId: "",
    blogDetails:null
  };

  GetBlogs = () => {
    axios
      .get(`http://localhost:8080/blog/`)
      .then((res) => {
        console.log(res.data);
        this.setState({
          blog: res.data,
        //  blogName: res.data.map((blog) => blog.name),
       //   blogDescription: res.data.map((blog) => blog.description),
          blogId: res.data[0].id,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`http://localhost:8080/blog/1`)
      .then((res) => {
          console.log(res.data)
        this.setState({
            blogDetails: res.data,
            blogDescription:res.data.blogs.map((blog) => blog.description),
            blogName: res.data.blogs.map((blog) => blog.name),
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  componentDidMount() {
    this.GetBlogs();
  }
  render() {
    // console.log(this.state.blogDescription[0])
    return (
      <div className="blogs">
        <h1 className="blogs__text">Check out these EPIC Templates!!!</h1>
        <div className="blogs__container">
        {this.state.blog.map((blo)=>(
            <div className="blogs__wrapper">
             <ul className="blogs__items">
              <Link to={`/blog/${blo.id}`} className="blogs__link"><BlogItem
                src={blo.image}
                text={blo.description}
                label={blo.name}
              /></Link>
            </ul>
            </div>
        ))}
        </div>
      </div>
    );
  }
}
export default Blogs;
