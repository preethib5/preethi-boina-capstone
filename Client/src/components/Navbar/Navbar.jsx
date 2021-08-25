import React, { useState } from "react";
import "../Navbar/Navbar.scss";
import {Link} from 'react-router-dom';
import blog from "../../assets/images/blog-icon-26466837.jpg";


export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar__left">

            <Link to={`/homepage`} className="navbar__logo">
               <img  className="navbar__img" src={blog} alt=""/>
            </Link>
        </div>
          <div className="navbar__right">
          <ul className="navbar__list">
           <Link to={`/homepage`}  className="navbar__link" > <li className="navbar__item" >Home</li></Link>
           {/* <Link to={`/`}  className="navbar__link" > <li className="navbar__item" >Blog</li></Link> */}
           <Link to={`/signup`}  className="navbar__link" > <li className="navbar__item" >SignUp</li></Link>
            </ul>
          </div>

      </nav>
    </>
  );
}
