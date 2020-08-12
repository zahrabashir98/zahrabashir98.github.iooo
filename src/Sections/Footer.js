import React, { Component } from "react";
import config from "../Configs/config.json";
import moment from "moment";
import "./Footer.css";
import { withIsVisible } from "react-is-visible/lib/withIsVisible";

class Footer extends Component {

    getCopyrightYear() {
        const startYear = parseInt(config.startTime.split("-")[0]);
        const currentYear = moment().year();

        return `${startYear.toString()} ${currentYear > startYear ? `- ${currentYear.toString()}` : ""}`
    }

    render() {
        const { isVisible } = this.props;

        return (
            <footer className="page-footer font-small blue">
                <div className={`footer-copyright text-center-py-3 ${isVisible ? "Visible" : ""}`}>
                    &copy; {this.getCopyrightYear()} by Zahra Bashir
                </div>
            </footer>
        )
    }
}

export default withIsVisible(Footer);