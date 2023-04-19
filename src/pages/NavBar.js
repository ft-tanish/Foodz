import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LogoImg from "../assests/images/logo.png";

const NavBar = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const cartItems = useSelector(store => store.cart.items);

  return (
    <div className="flex justify-between bg-orange-300 shadow-lg">
      <div className="h-28 p-2">
        <Link to="/">
          <img src={LogoImg} alt='Foodz' />
        </Link>
      </div>
      <div className="nav-items">
        <ul className="flex py-10">
          <li className="px-2">
            <Link to="/">
              Home
            </Link>
          </li>
          <li className="px-2">
            <Link to="/about">
              About
            </Link>
          </li>
          <li className="px-2">
            <Link to="/contact">
              Contact
            </Link>
          </li>
          <li className="px-2">
            <Link to="/instamart">
              Instamart
            </Link>
          </li>
          <li className="px-2">
            Cart - {cartItems.length}
          </li>
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