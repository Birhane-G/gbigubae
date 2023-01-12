import React from 'react'
import "../../assets/css/style.css";

export const Header = () => {
    const links = [
        {
          label: "Home",
          link: "/",
        },
        {
          label: "Programmes",
          link: "/programmes",
        },
        {
          label: "About",
          link: "/about",
        },
        {
            label: "Login",
            link: "/login",
          },
      ];
  return (
    <div className="Navigation-bar">
    <div className="Gbigubae-Logo">
      <h1>
        <span className="logo-text">GIBI</span> GUBAE
      </h1>
    </div>
    <div className="Navigation-Link">
      <div className="links">
        <ul>
          {links.map((link) => (
            <a href={link.link}><li>{link.label}</li></a>
          ))}
        </ul>
      </div>
    </div>
  </div>
  )
}
