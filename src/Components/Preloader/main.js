import React, { Component } from "react";
import MDSpinner from "react-md-spinner";
import "./main.css";

class Preloader extends Component {
    render() {
        return (
            <div className="Preloader">
                <MDSpinner size={64} />
                <h1 className="Text">Please wait...</h1>
            </div>
        );
    }
}

export default Preloader;