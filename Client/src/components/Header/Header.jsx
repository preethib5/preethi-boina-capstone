import React from "react";
import "../Header/Header.scss";
import Topbar from "../TopBar/Topbar"

export default function Header({Logout}) {
  return (
      <>
<Topbar Logout={Logout}/>

    <div className="body">
<div className="body__title">
    {/* <span className="body__title1">React & Node</span> */}
    <span className="body__title2">Blog</span>
</div>
<img className="body__img" src="https://www.lifewire.com/thmb/LoeFrbx1TR_NFkaoIG3m4suX98c=/1500x966/filters:fill(auto,1)/GettyImages-905508166-5c8a523fc9e77c00010c231d.jpg" alt="body-image"/>
    </div>
    </>
  );
}
