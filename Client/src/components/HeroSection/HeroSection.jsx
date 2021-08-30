import React from 'react'
import { Link } from 'react-router-dom'
import video from "../../assets/videos/video-1.mp4"
import "../HeroSection/HeroSection.scss"

export default function HeroSection() {
  return (
    <div className="herosection">
       <video className="herosection__video" src={video} autoPlay loop muted /> 
      <h1 className="herosection__title">WriteMe.Blog</h1>
      <p className="herosection__desc">Share your story with the world.....</p>
     <div className="herosection__buttons">
    <Link to={`/login`} > <button className="herosection__btn">Get Started</button></Link>
      {/* <button className="herosection__btn">Watch Trailer
      <i className="far fa-play-circle"/></button> */}
     </div>
    </div>
  )
}

