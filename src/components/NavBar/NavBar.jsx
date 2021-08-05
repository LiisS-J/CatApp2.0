import React,  {useState, useEffect} from 'react';
import { Route, NavLink } from "react-router-dom";
import * as usersService from "../../utilities/users-service";
import '../../pages/App/App.css'

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
                    <NavLink to="/cats">HOME</NavLink>
                    {/* &nbsp; | &nbsp;
                    <NavLink to="/adopt">ADOPT</NavLink> */}
                    &nbsp; | &nbsp;
                    {user ? (
                        user.isAdmin ? (
                            <span>
                                <NavLink to="/new">ADD A KITTY</NavLink>
                            </span>
                        ) : (
                            <span>
                                &nbsp; | &nbsp;
                                <b>Welcome, {user.name}</b>
                                &nbsp; | &nbsp;
                                <NavLink to="" onClick={handleLogOut}>
                                    Log Out
                                </NavLink>
                            </span>
                        )
                    ) : (
                        <span>
                            <NavLink to="/login">
                                Log In
                            </NavLink>
                            &nbsp; | &nbsp;
                            <NavLink to="/login">
                                Sign Up
                            </NavLink>
                        </span>
                    )}
                </nav>
            </header>
        </div>
    );
}

export default NavBar;
