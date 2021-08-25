import React from "react";
import { Link } from "react-router-dom";
import "../BlogItem/BlogItem.scss"
export default function BlogItem(props) {
  return (
    <>
      <li className="blogitem">
        <Link to={`/login`}className="blogitem__link">
          <figure className="blogitem__pic-wrap" data-category={props.label}>
          <img className="blogitem__img" src={props.src}/>
          </figure>
          <div className="blogitem__info">
            <h5 className="blogitem__text" data-category={props.text}>
                {props.text}
            </h5>
          </div>
        </Link>
      </li>
    </>
  );
}
