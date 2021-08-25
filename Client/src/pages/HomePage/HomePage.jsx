import React from "react";
import Blogs from "../../components/Blogs/Blogs";
import Footer from "../../components/Footer/Footer";
import HeroSection from "../../components/HeroSection/HeroSection";
import Navbar from "../../components/Navbar/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Blogs />
      <Footer/>
    </>
  );
}
