import React from "react";
import { Link, Redirect } from "react-router-dom";
import "../BlogItem/BlogItem.scss"

export default function BlogItem(props) {
  return (
    
    <>
      <li className="blogitem">
        <Link to={`/blog/${props.id}`} className="blogitem__link">
           
              <>
              <figure className="blogitem__pic-wrap" data-category={props.name}>
          <img className="blogitem__img" src={props.image}/>
          </figure>
          <div className="blogitem__info">
            <h5 className="blogitem__text" data-category={props.description}>
                {props.description}
            </h5>
          </div>
              
              </>
        </Link>
      </li>
    </>
  );
}
