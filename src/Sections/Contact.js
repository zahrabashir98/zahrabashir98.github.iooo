import React, { Component } from "react";
import "./Contact.css";
import { Container } from "react-bootstrap";
import config from "../Configs/config.json";
import { faFacebook,
         faTwitter,
         faInstagram,
         faLinkedin,
         faTwitch,
         faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withIsVisible } from "react-is-visible";

class Contact extends Component {

    getSocialLink(type, link, icon) {
        if (!link) {
            return null;
        }
        
        return <a href={link} title={type}><FontAwesomeIcon icon={icon} size="4x" /></a>
    }

    render() {
        const { isVisible } = this.props;

        return (
            <section id="Contact">
                <Container className={isVisible ? "Visible" : ""}>
                    <h1 className="sectionTitle">Contact</h1>
                    <p className="sectionContent">Feel free to send me a message here: <a href={`mailto:${config.email}`}>{config.email}</a>, I'll try to respond as quick as I can!<br/>I'm also on these social media things, if you need me there:</p>

                    <div className="SocialIcons">
                        {this.getSocialLink("Facebook", config.socials.facebook, faFacebook)}
                        {this.getSocialLink("Twitter", config.socials.twitter, faTwitter)}
                        {this.getSocialLink("Instagram", config.socials.instagram, faInstagram)}
                        {this.getSocialLink("LinkedIn", config.socials.linkedin, faLinkedin)}
                        {this.getSocialLink("Twitch", config.socials.twitch, faTwitch)}
                        {this.getSocialLink("YouTube", config.socials.twitch, faYoutube)}
                    </div>
                </Container>
            </section>
        )
    }
}

export default withIsVisible(Contact);