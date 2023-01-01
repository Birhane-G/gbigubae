import React from 'react'
import "../../assets/css/style.css";

export const Header = () => {
    const links = [
        {
          label: "Home",
          link: "/home",
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
    <section className="Navigation-bar">
    <div className="Gbigubae-Logo">
      <h1>
        <span className="logo-text">GIBI</span> GUBAE
      </h1>
    </div>
    <div className="Navigation-Link">
      <div className="links">
        <ul>
          {links.map((link) => (
            <li>{link.label}</li>
          ))}
        </ul>
      </div>
    </div>
  </section>
  )
}
