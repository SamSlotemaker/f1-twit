import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { Icon } from "../../components";
import logo from "../../assets/images/logo.png";

const Page = ({ children }: any) => {
  return (
    <>
      <div className="page-wrapper">
        <header className="page-navigation_container">
          <img
            src={logo}
            alt="logo"
            className="page-navigation_container_logo"
          />
          <nav className="page-navigation">
            <ul>
              <li>
                <Link to="/">
                  <Icon name="home" />
                  <div className="nav-text">Home</div>
                </Link>
              </li>
              <li>
                <Link to="/notifications">
                  <Icon name="notification" />
                  <div className="nav-text">Notifications</div>
                </Link>
              </li>
              <li>
                <Link to="/favorites">
                  <Icon name="heart" />
                  <div className="nav-text">Favorites</div>
                </Link>
              </li>
              <li>
                <Link to="/profile">
                  <Icon name="user" />
                  <div className="nav-text">Profile</div>
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        {children}
      </div>
    </>
  );
};

export default Page;
