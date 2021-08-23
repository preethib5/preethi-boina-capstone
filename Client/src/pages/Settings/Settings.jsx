import React from "react";
import "../Settings/Settings.scss";
import Topbar from "../../components/TopBar/Topbar";
import Sidebar from "../../components/SideBar/Sidebar";

export default function Settings() {
  return (
    <>
      <Topbar />
      <div className="settings">
        <div className="settings__wrapper">
          <div className="settings__title">
            <span className="settings__updateTitle">Update Your Account</span>
            <span className="settings__deleteTitle">Delete Account</span>
          </div>
          <form className="settings__form">
            <label htmlFor="profilepic">Profile Picture</label>
            <div className="settings__profilepic">
              <img className="settings__img" src="https://tse4.mm.bing.net/th?id=OIP.OMgy4YTVhPYnZLO3YsXeBQDCFB&pid=Api&P=0&w=300&h=300" alt=""/>
              <label  htmlFor="fileinput">
              <i className="settings__icon far fa-user-circle"></i>
              </label>
              <input type="file" id="fileinput" style={{display:"none"}}/>
            </div>
            <label>FullName</label>
            <input type="text" placeholder="FullName"/>
            <label>Email</label>
            <input type="email" placeholder="email@gmail.com"/>
            <label>Password</label>
            <input type="password" placeholder="Password"/>
           <button className="settings__submit">Update</button>
          </form>
        </div>

        <Sidebar />
      </div>
    </>
  );
}
