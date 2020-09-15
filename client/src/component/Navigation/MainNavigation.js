import React, { useState } from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import NavLinks from "./Navlinks";

import "./MainNavigation.css";

const MainNavigation = (props) => {
    return (
        <React.Fragment>
            <nav className="main-navigation__drawer-nav">
                <NavLinks />
            </nav>

            <MainHeader>
                <button className="main-navigation__menu-btn">
                    <span />
                    <span />
                    <span />
                </button>
                <h1 className="main-navigation__title">
                    <Link to="/">EDU-MENTOR</Link>
                </h1>
                <nav className="main-navigation__header-nav">
                    <NavLinks />
                </nav>
            </MainHeader>
        </React.Fragment>
    );
};

export default MainNavigation;
