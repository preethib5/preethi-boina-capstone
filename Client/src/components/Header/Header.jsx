import React from "react";
import "../Header/Header.scss";
import Topbar from "../TopBar/Topbar";
import House1 from "../../assets/images/House1.jpg";
import Image2 from "../../assets/images/img-home.jpg";
import Image3 from "../../assets/images/receipe1.jpeg";
import Image4 from "../../assets/images/img-5.jpg";

export default function Header({ Logout }) {
  return (
    <>
      <Topbar Logout={Logout} />

      <div className="body">
        <div className="body__title">
          {/* <span className="body__title1">React & Node</span> */}
          <span className="body__title2">Blog</span>
        </div>
        <div id="slider"  className="body__slides">
        <figure>
          <img
            className="body__img"
            src="https://www.lifewire.com/thmb/LoeFrbx1TR_NFkaoIG3m4suX98c=/1500x966/filters:fill(auto,1)/GettyImages-905508166-5c8a523fc9e77c00010c231d.jpg"
            alt="body-image"
          />
          <img className="body__img" src={Image2} alt="body-image2" />
          <img className="body__img" src={Image4} alt="body-image2" />
          <img className="body__img" src={House1} alt="body-image2" />
          <img className="body__img" src={Image3} alt="body-image2" />
        </figure>
      </div>
      </div>
     
    </>
  );
}
