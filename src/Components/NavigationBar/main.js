import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import config from "../../Configs/config.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faStar, faCode, faIdCard, faFileAlt } from "@fortawesome/free-solid-svg-icons";
import "./main.css";
import { animateScroll } from 'react-scroll'

class NavigationBar extends Component {

    state = {
        isVisible: false
    }

    componentDidMount() {
        setTimeout(() => this.setState({ isVisible: !this.state.isVisible }), 2000);
    }

    getLink(sectionId, icon) {
        return <Nav.Link onClick={() => animateScroll.scrollTo(document.getElementById(sectionId).offsetTop - 50)}><FontAwesomeIcon icon={icon} />{sectionId}</Nav.Link>
    }

    render() {
        return (
            <Navbar bg="dark" expand="lg" variant="dark" fixed="top" className={this.state.isVisible ? "Visible" : ""}>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="mainNavbar">
                    <Nav className="mr-auto">
                        {this.getLink("Home", faHome)}
                        {this.getLink("About", faUser)}
                        {this.getLink("Experience", faStar)}
                        {this.getLink("Skills", faStar)}
                        {this.getLink("Projects", faCode)}
                        {this.getLink("Contact", faIdCard)}
                        <Nav.Link href="/resume"><FontAwesomeIcon icon={faFileAlt} />Resume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Brand onClick={() => animateScroll.scrollToTop()}>{config.name}</Navbar.Brand>
            </Navbar>
        )
    }
}

export default NavigationBar;