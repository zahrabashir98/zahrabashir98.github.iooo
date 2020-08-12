import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLevelUpAlt } from '@fortawesome/free-solid-svg-icons'
import MDSpinner from "react-md-spinner";
import "./About.css";
import config from "../Configs/config.json";
import { Container, Row, Col } from "react-bootstrap";
import ImgSuspense from "img-suspense";
import photoOfMe from "../Assets/selfie.jpg";
import { withIsVisible } from "react-is-visible"

class About extends Component {

    render() {
        const aboutMe = { __html: config.about_me }

        const { isVisible } = this.props;

        return (
            <section id="About">
                <Container className={`Content ${isVisible ? "Visible" : ""}`}>
                    <Row>
                        <Col className="LeftSide">
                            <ImgSuspense
                                className="Selfie"
                                src={photoOfMe}
                                fallback={<MDSpinner size={48} />} />

                            <div className="Text">
                                <p>It's me!</p>
                                <FontAwesomeIcon icon={faLevelUpAlt} />
                            </div>
                        </Col>

                        <Col className="RightSide">
                            <h1 className="sectionTitle">About me</h1>
                            <p dangerouslySetInnerHTML={aboutMe}></p>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default withIsVisible(About);