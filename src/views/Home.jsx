import React from "react";
import { Header } from "./inc/Header";
import { BlogSection } from "./Blog/BlogSection";
import { Gallary } from "./Gallary/Gallary";
import { Footer } from "./footer/Footer";
export const Home = () => {
  return (
    <section>
      <div className="background-image"></div>
      <div className="image-text-container">
        <div className="text">
          <h1>GIBI GUBAE</h1>
          <p>welcome to Gibi Gubae</p>
        </div>
      </div>
      <BlogSection />
      <Gallary />
      <Footer />
    </section>
  );
};
