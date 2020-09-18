import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
} from "react-router-dom";
import MainNavigation from "./component/Navigation/MainNavigation";

import MainLanding from "./component/Main/MainLanding";

import "./App.css";

const App = () => {
    return (
        <Router>
            <MainNavigation />
            <Switch>
                <Route path="/" exact>
                    <MainLanding />
                </Route>
                <Redirect to="/" />
            </Switch>
        </Router>
    );
};

export default App;
