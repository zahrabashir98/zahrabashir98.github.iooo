import React, { Component } from "react";
import config from "../Configs/config.json";
import ReactTyped from "react-typed";
import Particles from "react-particles-js";
import "./Landing.css";
import particlesConfig from "../Configs/particlesjs.json";

class Landing extends Component {

    state = {
        isVisible: false
    }

    componentDidMount() {
        setTimeout(() => this.setState({ isVisible: !this.state.isVisible }), 1000);
    }

    getName() {
        return config.name.split('').map((letter, index) => (
            <span className="animatedLetter" key={index}>{letter}</span>
        ))
    }

    render() {
        return (
            <section id="Home">
                <Particles
                    className="Background"
                    params={particlesConfig} />

                <div className={`Content ${this.state.isVisible ? "Activated" : ""}`}>
                    <h1>{this.getName()}</h1>

                    <h4>
                        <ReactTyped
                            strings={config.proffesions}
                            typeSpeed={40}
                            backSpeed={50}
                            backDelay={1000}
                            cursorChar="_"
                            loop />
                    </h4>
                </div>
            </section>
        );
    }
}

export default Landing;