import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import "./main.css";
import { animateScroll } from 'react-scroll'

class BackToTop extends Component {

    scrollBind = null

    state = {
        isVisible: false
    }

    componentDidMount() {
        this.scrollBind = this.handleScroll.bind(this);

        window.addEventListener("scroll", this.scrollBind);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollBind);
    }

    handleScroll() {
        let scrollTop = window.pageYOffset;

        if ((scrollTop !== 0) !== this.state.isVisible) {
            this.setState({ isVisible: scrollTop !== 0 })
        }
    }

    render() {
        return <FontAwesomeIcon icon={faArrowCircleUp} className={`BackToTop ${this.state.isVisible ? "Visible" : ""}`} size="2x" onClick={() => animateScroll.scrollToTop()} />
    }
}

export default BackToTop;