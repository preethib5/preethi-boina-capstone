import React from "react";
import "../SideBar/Sidebar.scss";
import {Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__item">
        <span className="sidebar__title">ABOUT ME</span>
        <img className="sidebar__img" src="https://i.ytimg.com/vi/m5kR7TPAkSw/maxresdefault.jpg" alt="sidebar-img" />
        <p className="sidebar__para" >
         Hi EveryOne!!! Thanks for stopping by here!!.....
         Get in Touch or FollowUs on Twitter, Facebook and Instagram.....
        </p>
      </div>
      <div className="sidebar__item">
        <span className="sidebar__title">CATEGORIES</span>
        <ul className="sidebar__list">
          <li className="sidebar__items">Adventure</li>
          <li className="sidebar__items">Food&Recipes</li>
          <li className="sidebar__items">HousesStyling</li>
          <li className="sidebar__items">Mystrey</li>
          <li className="sidebar__items">Fillmore</li>
        </ul>
      </div>
      <div className="sidebar__item">
        <span className="sidebar__title">FOLLOW US</span>
        <div className="sidebar__social">
          <i className="sidebar__icons fab fa-facebook-f"></i>
          <i className="sidebar__icons fab fa-twitter"></i>
          <i className="sidebar__icons fab fa-pinterest-p"></i>
          <i className="sidebar__icons fab fa-instagram"></i>
        </div>
      </div>
    </div>
  );
}
