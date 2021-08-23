import React from "react";
import "../AddPost/AddPost.scss";
import Topbar from "../../components/TopBar/Topbar";

export default function AddPost() {
  return (
    <>
      <Topbar />
      <div className="addpost">
          <img className="addpost__img" src="http://amolife.com/en/wp-content/uploads/2016/11/nature____________.jpg" alt="add-img"/>
        <form className="addpost__form">
          <div className="addpost__formGroup">
              <label htmlFor="fileInput">
              <i className="addpost__icon fas fa-plus"></i>
              </label>
            <input type="file" id="fileInput" style={{display:"none"}}/>
            <input className="addpost__input" type="text" placeholder="title" autoFocus={true}/>
          </div>

          <div className="addpost__formGroup">
              <textarea  className="addpost__input1" type="text" placeholder="Tell your story...."></textarea>
          </div>

         
        </form>
        <button  className="addpost__submit">Publish</button>
      </div>
    </>
  );
}
