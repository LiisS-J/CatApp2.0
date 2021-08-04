import React,  {useState, useEffect} from 'react';
import { Route, NavLink } from "react-router-dom";
import * as usersService from "../../utilities/users-service";

function NavBar({ user, setUser }) {
  // Add the following function
  function handleLogOut() {
    // Delegate to the users-service
    usersService.logOut();
    // Update the state will also cause a re-render
    setUser(null);
  }

  return (
    <div>
      <header>
        <nav>
          <NavLink to="/cats">HOME</NavLink>
          &nbsp; | &nbsp;
          <NavLink to="/adopt">ADOPT</NavLink>
          &nbsp; | &nbsp;
          <NavLink to="/new">ADD A KITTY</NavLink>
          &nbsp; | &nbsp;
          <span>
            <b>Welcome, {user.name}</b>
          </span>
          &nbsp; | &nbsp;
          <NavLink to="" onClick={handleLogOut}>
            Log Out
          </NavLink>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;
