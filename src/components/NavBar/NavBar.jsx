import React, { useState, useEffect } from "react";
import { Route, NavLink } from "react-router-dom";
import * as usersService from "../../utilities/users-service";
import "../../pages/App/App.css";

function NavBar({ user, setUser }) {
  // Add the following function
  function handleLogOut() {
    // Delegate to the users-service
    usersService.logOut();
    // Update the state will also cause a re-render
    setUser(null);
  }

  return (
    <div className="navBar">
      <header>
        <nav>
          <NavLink className="home" to="/cats">
            HOME
          </NavLink>
          &nbsp; | &nbsp;
          <NavLink to="/new">ADD A KITTY</NavLink>
          {user ? (
            <span>
              &nbsp; | &nbsp;
              <b>Welcome, {user.name}</b>
              &nbsp; | &nbsp;
              <NavLink to="" onClick={handleLogOut}>
                LOG OUT
              </NavLink>
            </span>
          ) : (
            <span>
              &nbsp; | &nbsp;
              <NavLink to="/login">LOG IN</NavLink>
              &nbsp; | &nbsp;
              <NavLink to="/login">SIGN UP</NavLink>
            </span>
          )}
        </nav>
      </header>
    </div>
  );
}

export default NavBar;
