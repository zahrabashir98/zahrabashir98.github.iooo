import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Resume from "./Pages/Resume";
import Main from "./Pages/Main";

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route exact path="/resume" component={Resume} />
                <Route exact path="*" component={Main} />
            </BrowserRouter>
        );
    }
}

export default Router;