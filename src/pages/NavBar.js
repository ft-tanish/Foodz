import React from "react";
import LogoImg from "../assests/images/logo.png";

const NavBar = () => {

  const menuList = [
    { name: 'Home', 'id': 1 },
    { name: 'About', 'id': 1 },
    { name: 'Contact', 'id': 1 },
    { name: 'Cart', 'id': 1 },
  ]

  const menuHTML = menuList.map(({ name, id }) => <li key={id}>{name}</li>)

  return (
    <div className="header">
      <div className="logo">
        <img src={LogoImg} alt='Foodz' />
      </div>
      <div className="nav-items">
        <ul>
          {menuHTML}
        </ul>
      </div>
    </div>
  )
}

export default NavBar;