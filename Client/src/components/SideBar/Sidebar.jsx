import React from "react";
import "../SideBar/Sidebar.scss";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__item">
        <span className="sidebar__title">ABOUT ME</span>
        <img className="sidebar__img" src="https://i.ytimg.com/vi/m5kR7TPAkSw/maxresdefault.jpg" alt="sidebar-img" />
        <p className="sidebar__para" >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
          mollitia, vero dolor blanditiis unde labore minus, aperiam voluptate
          accusantium quia quibusdam
        </p>
      </div>
      <div className="sidebar__item">
        <span className="sidebar__title">CATEGORIES</span>
        <ul className="sidebar__list">
          <li className="sidebar__items">LifeStyle</li>
          <li className="sidebar__items">Music</li>
          <li className="sidebar__items">Style</li>
          <li className="sidebar__items">Sports</li>
          <li className="sidebar__items">Tech</li>
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
