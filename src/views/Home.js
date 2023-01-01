import React from "react";
import { Header } from "./inc/Header";

export const Home = () => {
  return (
    <section>
      <Header />
      <div className="background-image"></div>
      <div className="image-text-container">
        <div className="text">
          <h1>GIBI GUBAE</h1>
          <p>welcome to Gibi Gubae</p>
        </div>
      </div>
    </section>
  );
};
