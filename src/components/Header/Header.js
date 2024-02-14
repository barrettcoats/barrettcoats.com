import React from "react";
import "./Header.scss";
import Logo from "./Logo/Logo";
import NavBar from "./NavBar/NavBar";

const Header = () => {
  return (
    <header>
      <Logo />
      <NavBar />
    </header>
  );
};

export default Header;
