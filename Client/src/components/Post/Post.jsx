import React from "react";
import "../Post/Post.scss";
import {Link} from 'react-router-dom';
export default function Post() {
  return (
    <div className="post">
        <Link to={`/post/:id`} className="post__link">
      <img className="post__img" src="https://www.lux-review.com/wp-content/uploads/2020/05/enjoy-life-1920-x-1080.jpg" alt="post-img" />
      <div className="post__info">
        <div className="post__cats">
            <span className="post__cat">Music</span>
            <span className="post__cat">Life</span>
        </div>
       <span className="post__title">Lorem ipsum dolor sit .</span>
       <span className="post__date">1hr ago</span>
      </div></Link>
      <p className="post__desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
      sequi doloremque voluptatum nam ullam similique libero? Laborum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      sequi doloremque voluptatum nam ullam similique libero? Laborum?Lorem ipsum dolor sit amet consectetur adipisicing elit.
      sequi doloremque voluptatum nam ullam similique libero? Laborum?Lorem ipsum dolor sit amet consectetur adipisicing elit.
      sequi doloremque voluptatum nam ullam similique libero? Laborum?Lorem ipsum dolor sit amet consectetur adipisicing elit.
      sequi doloremque voluptatum nam ullam similique libero? Laborum?Lorem ipsum dolor sit amet consectetur adipisicing elit.
      sequi doloremque voluptatum nam ullam similique libero? Laborum?Lorem ipsum dolor sit amet consectetur adipisicing elit.
      sequi doloremque voluptatum nam ullam similique libero? Laborum?Lorem ipsum dolor sit amet consectetur adipisicing elit.
      sequi doloremque voluptatum nam ullam similique libero? Laborum?Lorem ipsum dolor sit amet consectetur adipisicing elit.
      sequi doloremque voluptatum nam ullam similique libero? Laborum?
      </p>
    </div>
  );
}
