import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="logo-font">Cécile Dubois</div>
      <nav>
        <NavLink to="/" className="header-nav-link">
          Home
        </NavLink>
        <NavLink to="/" className="header-nav-link">
          Pourquoi ?
        </NavLink>
        <NavLink to="/" className="header-nav-link">
          Qui suis-je ?
        </NavLink>
        <NavLink to="/" className="header-nav-link">
          Portfolio
        </NavLink>
        <NavLink to="/" className="header-nav-link">
          Contact
        </NavLink>
      </nav>
    </header>
  );
}
