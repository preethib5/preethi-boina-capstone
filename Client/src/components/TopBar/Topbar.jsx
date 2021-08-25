import React from "react";
import "../TopBar/Topbar.scss";
import { Link } from "react-router-dom";

export default function Topbar({ Logout }) {
  const user =true;
  return (
    <div className="header">
      <div className="header__left">
        <i className="header__icons fab fa-facebook-f"></i>
        <i className="header__icons fab fa-twitter"></i>
        <i className="header__icons fab fa-pinterest-p"></i>
        <i className="header__icons fab fa-instagram"></i>
      </div>

      <div className="header__center">
        <ul className="header__list">
          <Link to={`/blog`} className="header__link">
            <li className="header__items">HOME</li>
          </Link>
          <Link to={`/blog`} className="header__link"><li className="header__items">ABOUT</li></Link>
          <li className="header__items">CONTACT</li>
          <Link to={`/addpost`} className="header__link">
            <li className="header__items">POST</li>
          </Link>

         {user &&  <Link to={`/`} className="header__link">
            <li className="header__items" onClick={Logout}>
              LOGOUT
            </li>
          </Link>}
        </ul>
      </div>
      <div className="header__right">
       {user ? ( <Link to={`/settings`}>
        <img
          className="header__img"
          src="https://www.hdnicewallpapers.com/Walls/Big/Rainbow/Rainbow_on_Mountain_HD_Image.jpg"
          alt="profile-image"
        />
        </Link>):(
          <>
          <Link className="header__link"  to={`/login`} >LOGIN</Link>
          </>
        )}
       
        <i className="header__searchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
