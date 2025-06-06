import { Link } from "gatsby";
import React from "react";
import "./Footer.scss";
import GithubLogo from "./assets/github.svg";
import LinkedInLogo from "./assets/linkedin.svg";

const Footer = () => {
  return (
    <footer>
      <hr />
      <div class="footer-container">
        <div class="footer-container__section footer-container__section--quicklinks">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/notes">Notes</Link>
            </li>
            <li>
              <Link to="/photos">Photos</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
        <div class="footer-container__section footer-container__section--external-icons">
          <ul>
            <li>
              <a href="https://github.com/barrettcoats">
                <GithubLogo />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/barrett-coats-0557852a9/">
                <LinkedInLogo />
              </a>
            </li>
          </ul>
        </div>
        <div class="footer-container__section">
          Contact:{" "}
          <a href="mailto:hello@barrettcoats.com">hello@barrettcoats.com</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
