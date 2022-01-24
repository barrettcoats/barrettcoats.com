import React from "react";
import "./Logo.scss";
import { Link } from "gatsby";

const Logo = () => {
  return (
    <Link className="header--logo" to="/">
      J.&nbsp;Barrett&nbsp;Coats
    </Link>
  );
};

export default Logo;
