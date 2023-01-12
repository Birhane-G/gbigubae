import React from "react";
import { Link } from "react-router-dom";

import "./login.css";
import img from "../../assets/image/image.png";

export const Login = () => {
  return (
    <div className="container">
      <div className="login_form_container">
        <div className="section">
          <div className="login">
            <form className="login_form">
              <div className="Login_Heading">
                <h1>መግቢያ</h1>
              </div>
              <div className="login_input">
                <input type="text" name="username" placeholder="username" className="input" required />
                <br />
                <input type="password" name="password" placeholder="password" className="input" required />
              </div>
              <div className="forget_acc">
                <label>
                  <a href="">Forget Password?</a>
                </label>
              </div>
              <div className="login_btn">
                <button type="submit" className="login_btn">
                  ላከ
                </button>
              </div>
              <div className="register">
                <label>
                  <span>Didn't have an account?</span>
                  <Link to="/register"> Register</Link>
                </label>
              </div>
            </form>
          </div>
          <div className="login__img">
            <img src={img} alt="a priest in lalibela church" />
          </div>
          <div className="close__btn">
            <Link to="/">X</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
