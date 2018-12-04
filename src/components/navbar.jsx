import React, { Component } from "react";

const NavBar = ({ totalCounters }) => {
    return (
      <nav className="navbar navbar-light bg-light">
        <a href="#" className="navbar-brand">
          NavBar{" "}
        </a>
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </nav>
    );
};
 
export default NavBar;
