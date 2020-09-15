import React from "react";

import { NavLink } from "react-router-dom";

import "./Navlinks.css";

const NavLinks = (props) => {
    return (
        <ul className="nav-links">
            <li>
                <NavLink to="/">HOME</NavLink>
            </li>
            <li>
                <NavLink to="/ui/news">BLOG</NavLink>
            </li>
            <li>
                <NavLink to="/news/new">HOW IT WORKS </NavLink>
            </li>
            <li>
                <NavLink to="/auth">BECOME A MENTOR</NavLink>
            </li>
            <li>
                <NavLink to="/auth">
                    <button>LOG IN</button>
                </NavLink>
            </li>
            <li>
                <NavLink to="/auth">
                    <button>SIGN IN</button>
                </NavLink>
            </li>
        </ul>
    );
};

export default NavLinks;
