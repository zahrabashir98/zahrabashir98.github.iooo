import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import config from "../../Configs/config.json";
import moment from "moment";
import "./main.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCalendar, faUsers, faAward } from '@fortawesome/free-solid-svg-icons';
import Particles from "react-particles-js";
import { useCountUp } from 'react-countup';
import { withIsVisible } from "react-is-visible/lib/withIsVisible";

let counters = new Map();

class Counters extends Component {

    state = {
        particlesHeight: 0
    }

    containerRef = React.createRef();

    componentDidMount() {
        this.setState({ particlesHeight: this.getContainerHeight() })
    }

    getContainerHeight() {
        return this.containerRef.current.clientHeight;
    }

    getLayout(icon, counter, title, id) {
        return <CounterEntry icon={icon} counter={counter} title={title} id={id} />
    }

    getProjectsCount() {
        if (config.projects.length > 0) {
            return this.getLayout(faCheck, config.projects.length, "Projects", "projects")
        }
    }

    getExperienceTime() {
        const startTime = moment(config.startTime, "YYYY-MM-DD");
        const currentTime = moment()

        const diffirence = {
            year: currentTime.diff(startTime, "years"),
            months: currentTime.diff(startTime, "months"),
            days: currentTime.diff(startTime, "days"),
            hours: currentTime.diff(startTime, "hours"),
            minutes: currentTime.diff(startTime, "minutes"),
            seconds: currentTime.diff(startTime, "seconds")
        }

        if (diffirence.year > 0)
            return this.getLayout(faCalendar, diffirence.year, (diffirence.year === 1 ? "year" : "years") + " of experience", "experience");
        else if (diffirence.months > 0)
            return this.getLayout(faCalendar, diffirence.months, (diffirence.months === 1 ? "month" : "months") + " of experience", "experience");
        else if (diffirence.days > 0)
            return this.getLayout(faCalendar, diffirence.days, (diffirence.days === 1 ? "day" : "days") + " of experience", "experience");
        else if (diffirence.minutes > 0)
            return this.getLayout(faCalendar, diffirence.minutes, (diffirence.minutes === 1 ? "minute" : "minutes") + " of experience", "experience");
        else
            return this.getLayout(faCalendar, diffirence.seconds, (diffirence.seconds === 1 ? "second" : "seconds") + " of experience", "experience");
    }

    getClientsCount() {
        if (config.clientsCount > 0) {
            return this.getLayout(faAward, config.clientsCount, "Total clients", "clients");
        }
    }

    getAwardsCount() {
        if (config.awardsCount > 0) {
            return this.getLayout(faUsers, config.clientsCount, "Total awards", "awards");
        }
    }

    render() {
        const { isVisible } = this.props;

        if (isVisible) {
            for (const entry of counters.entries()) {
                const func = entry[1];
                func();
            }
        }

        return (
            <div id="ExperienceCounters">
                <Particles className="Background" height={this.state.particlesHeight} />

                <Container ref={this.containerRef}>
                    <Row>
                        {this.getProjectsCount()}
                        {this.getExperienceTime()}
                        {this.getClientsCount()}
                        {this.getAwardsCount()}
                    </Row>
                </Container>
            </div>
        )
    }
}

const CounterEntry = (props) => {
    const { countUp, start } = useCountUp({ start: 0, end: props.counter });
    counters.set(props.id, start);

    return (
        <Col>
            <div className="counterIcon">
                <FontAwesomeIcon icon={props.icon} size="2x" />
            </div>

            <h4 className="counter">{countUp}</h4>
            <p className="title">{props.title}</p>
        </Col>
    )
}

export default withIsVisible(Counters);