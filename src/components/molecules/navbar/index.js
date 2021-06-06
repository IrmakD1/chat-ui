import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";
import chatIcon from "../../../assets/icons/chat-icon.png";
import hamburgerMenu from "../../../assets/icons/hamburger-icon.png";
import closeMenuIcon from "../../../assets/icons/close-menu.png";
import { NavItem } from "../../atoms";
import "./styles.css";

const links = [
  {
    text: "Home",
    route: "/",
  },
  {
    text: "Contacts",
    route: "/contacts",
  }
];

const NavBar = ({ loggedIn, handleLogin }) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const showMobileMenu = () =>
    window.innerWidth <= 960 ? setMobileMenu(true) : setMobileMenu(false);

  const changeMenu = () => {
    setShowMenu(!showMenu);
  };

  const renderNavItems = () => {
    if(loggedIn) {
        const newLinkArray = [...links, { text: 'Log Out', route:'/login'}]
        return _.map(newLinkArray, (linkItem) => {
            if(linkItem.route === '/login') {
                return (
                    <li className="nav-item" onClick={handleLogin}>
                    <NavItem text={linkItem.text} route={linkItem.route} />
                    </li>
                )
            }
            return (
                <li className="nav-item" >
                <NavItem text={linkItem.text} route={linkItem.route} />
                </li>
            )
        })
    }
    else if (!loggedIn) {
        const newLinkArray = [...links, { text: 'Login', route:'/login'}]
        return _.map(newLinkArray, (linkItem) => {
            if(linkItem.route === '/login') {
                return (
                    <li className="nav-item" onClick={handleLogin}>
                    <NavItem text={linkItem.text} route={linkItem.route} />
                    </li>
                )
            }
            return (
                <li className="nav-item" >
                <NavItem text={linkItem.text} route={linkItem.route} />
                </li>
            )
        })
    }
  }

  useEffect(() => {
    showMobileMenu();
  });

  window.addEventListener("resize", showMobileMenu);

  return (
    <div className="nav-bar">
      <Link className="nav-bar-container" to="/">
        <img className="chat-icon-header" src={chatIcon} alt="chat-icon" />
        <p className="header-text">Chat App</p>
      </Link>
      <div className="nav-button-container">
        <ul className={mobileMenu ? "hide" : "nav-button-list"}>
          {renderNavItems()}
        </ul>
        <img
          className={
            showMenu
              ? `${mobileMenu ? "close-menu-icon" : "hide"}`
              : `${mobileMenu ? "burger-menu-icon" : "hide"}`
          }
          src={showMenu ? closeMenuIcon : hamburgerMenu}
          alt="menu-icon"
          onClick={changeMenu}
        />
      </div>
    </div>
  );
};

export default NavBar;
