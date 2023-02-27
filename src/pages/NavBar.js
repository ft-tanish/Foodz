import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoImg from "../assests/images/logo.png";

const NavBar = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img src={LogoImg} alt='Foodz' />
        </Link>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact">
              Contact
            </Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
      <div>
        {isLoggedIn ? <button onClick={() => setIsLoggedIn(false)}> Logout</button>
          : <button onClick={() => setIsLoggedIn(true)}>Login</button>}
      </div>
    </div >
  )
}

export default NavBar;