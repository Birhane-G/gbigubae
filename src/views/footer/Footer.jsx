import React from "react";
import "./footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_container">
        <div className="fotter_card">
          <div className="address">
            <h1>Address</h1>
            <p>Limat,Arba Minch - Ethiopia</p>
            <p>+251999999999</p>
            <p>gbigubae@example.com</p>
          </div>
        </div>
        <div className="fotter_card">
          <div className="quickLink">
            <h1>Quick Links</h1>
            <ul>
              <li>Home</li>
              <li>Programmes</li>
              <li>About</li>
            </ul>
          </div>
        </div>
        <div className="fotter_card">
          <div className="fotterlinks">
            <h1>Links</h1>
          </div>
        </div>
      </div>
      <div className="hrline"></div>
      <div className="footer_bottom">
        <span>© GIBIGUBAE. All Rights Reserved.</span>
      </div>
    </div>
  );
};
