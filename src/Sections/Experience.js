import React, { Component, Fragment } from "react";
import "./Experience.css";
import { Container, CardColumns, Card, Row, Col, Tooltip, OverlayTrigger } from "react-bootstrap";
import ImgSuspense from "img-suspense";
import cppLogo from "../Assets/logos/cpp_logo.png";
import javaLogo from "../Assets/logos/java_logo.jpg";
import cLogo from "../Assets/logos/c_logo.png";
import pythonLogo from "../Assets/logos/python_logo.png";
import MDSpinner from "react-md-spinner";
import htmlLogo from "../Assets/logos/html_logo.png";
import assemblyLogo from "../Assets/logos/assembly_logo.png";
import GoLogo from "../Assets/logos/go_logo.jpeg";
import vhdlLogo from "../Assets/logos/vhdl_logo.png";
import mysqlLogo from "../Assets/logos/mysql_logo.png";
import matlabLogo from "../Assets/logos/matlab_logo.jpg";
import config from "../Configs/config.json";
import unityLogo from "../Assets/logos/unity_logo.png";
import linuxLogo from "../Assets/logos/Linux_logo.png";
import gymLogo from "../Assets/logos/gym_logo.png";
import dockerLogo from "../Assets/logos/docker_logo.png";
import psqlLogo from "../Assets/logos/psql_logo.png";


import awsLogo from "../Assets/logos/aws_logo.png";
import azureLogo from "../Assets/logos/azure_logo.png";
import firebaseLogo from "../Assets/logos/firebase_logo.png";
import djangoLogo from "../Assets/logos/django_logo.png";
import djangoRestLogo from "../Assets/logos/django_rest_logo.png";
import SDLLogo from "../Assets/logos/sdl_logo.png";
import PyGameLogo from "../Assets/logos/pygame_logo.png";
import tfLogo from "../Assets/logos/tf_logo.png";
import kerasLogo from "../Assets/logos/keras_logo.png";
import npLogo from "../Assets/logos/np_logo.png";
import scLogo from "../Assets/logos/sc_logo.png";
import ocvLogo from "../Assets/logos/ocv_logo.png";
import malletLogo from "../Assets/logos/mallet_logo.png";
import nltkLogo from "../Assets/logos/nltk_logo.png";
import srilmLogo from "../Assets/logos/srilm_logo.png";
import TFSLogo from "../Assets/logos/vs_logo.png";
import trelloLogo from "../Assets/logos/trello_logo.png";
import jiraLogo from "../Assets/logos/jira_logo.jpg";

import blenderLogo from "../Assets/logos/blender_logo.png";
import gimpLogo from "../Assets/logos/gimp_logo.png";
import gitLogo from "../Assets/logos/git_logo.png";
import pycharmLogo from "../Assets/logos/pycharm_logo.png";
import qtLogo from "../Assets/logos/qt_logo.png";
import vsLogo from "../Assets/logos/vs_logo.png";
// import Counters from "../Components/Counters/main";
import { withIsVisible } from "react-is-visible";

class Experience extends Component {

    languagesBinding = {
        general: [
            {
                logo: pythonLogo,
                name: "Python",
                description: "Advanced"
            },
            {
                logo: cppLogo,
                name: "C++",
                description: "Somewhat experienced"
            },
            {
                logo: javaLogo,
                name: "Java",
                description: "Somewhat experienced"
            },
            {
                logo: matlabLogo,
                name: "MATLAB",
                description: "Somewhat experienced"
            }
           
        ],
        web: [
            {
                logo: GoLogo,
                name: "Go",
                description: "Normal"
            },
            {
                logo: cLogo,
                name: "C",
                description: "Normal"
            },

            {
                logo: mysqlLogo,
                name: "MySQL",
                description: "Normal"
            },
            {
                logo: assemblyLogo,
                name: "Assembly",
                description: "Somewhat experienced"
            },
            {
                logo: vhdlLogo,
                name: "VHDL",
                description: "Normal"
            },
            {
                logo: htmlLogo,
                name: "HTML/CSS",
                description: "Somewhat experienced"
            }
            

        ]
    }

    enginesBinding = [

        {
            logo: linuxLogo,
            name: "Linux",
            description: "Somewhat experienced"
        },
        {
            logo: gitLogo,
            name: "Git",
            description: "Advanced"
        },
        {
            logo: gymLogo,
            name: "Gym OpenAI",
            description: "Somewhat experienced"
        },
        {
            logo: psqlLogo,
            name: "Postgre SQL",
            description: "Somewhat experienced"
        },
        {
            logo: unityLogo,
            name: "Unity 3D",
            description: "Beginner"
        },
        {
            logo: dockerLogo,
            name: "Docker",
            description: "Beginner"
        },
        {
            logo: firebaseLogo,
            name: "Firebase",
            description: "Beginner"
        }

    ]

    servicesBinding = [
        {
            logo: firebaseLogo,
            name: "Firebase",
            description: "Advanced"
        },
        {
            logo: azureLogo,
            name: "Azure",
            description: "Beginner"
        },
        {
            logo: awsLogo,
            name: "AWS",
            description: "Beginner"
        }
    ]
    LToolsBinding = [
        {
            logo: tfLogo,
            name: "Tensorflow",
            description: "Somewhat experienced"
        },
        {
            logo: npLogo,
            name: "Numpy",
            description: "Advanced"
        },
        {
            logo: kerasLogo,
            name: "Keras",
            description: "Advanced"
        },
        {
            logo: ocvLogo,
            name: "OpenCV",
            description: "Somewhat experienced"
        },
        {
            logo: scLogo,
            name: "Scikit-learn",
            description: "Somewhat experienced"
        },
        {
            logo: nltkLogo,
            name: "NLTK",
            description: "Somewhat experienced"
        },
        {
            logo: srilmLogo,
            name: "SRILM",
            description: "Beginner"
        },
        {
            logo: malletLogo,
            name: "Mallet",
            description: "Beginner"
        }

    ]
    ProjectTools = [
        {
            logo: TFSLogo,
            name: "TFS",
            description: "Advanced"
        },
        {
            logo: trelloLogo,
            name: "Trello",
            description: "Somewhat experienced"
        },
        {
            logo: jiraLogo,
            name: "Jira",
            description: "Somewhat experienced"
        }

    ]
    softwareBinding = [
        {
            logo: djangoLogo,
            name: "Django",
            description: "Advanced"
        },
        {
            logo: djangoRestLogo,
            name: "Django Rest",
            description: "Somewhat experienced"
        },
        {
            logo: SDLLogo,
            name: "SDL",
            description: "Somewhat experienced"
        },
        {
            logo: PyGameLogo,
            name: "PyGame",
            description: "Somewhat experienced"
        }
        // {
        //     logo: gitLogo,
        //     name: "Git",
        //     description: "Advanced"
        // },
        // {
        //     logo: blenderLogo,
        //     name: "Blender",
        //     description: "Beginner"
        // },
        // {
        //     logo: gimpLogo,
        //     name: "Gimp",
        //     description: "Somewhat experienced"
        // }
    ]

    getEntries(array) {
        return array.map(entry => {
            return entry.logo
                ? (
                    <OverlayTrigger
                        key={entry.name}
                        placement="top"
                        overlay={<Tooltip>{entry.description}</Tooltip>}>
                        <Col className="entryWithLogo">
                            <ImgSuspense
                                src={entry.logo}
                                fallback={<MDSpinner />} />
                            <h6 class="entryName">{entry.name}</h6>
                        </Col>
                    </OverlayTrigger>
                )
                : (
                    <OverlayTrigger
                        key={entry.name}
                        placement="top"
                        overlay={<Tooltip>{entry.description}</Tooltip>}>
                        <Col className="entry" key={entry.name}>
                            <h6 class="entryName">{entry.name}</h6>
                        </Col>
                    </OverlayTrigger>
                )
        })
    }

    getExperience(array, showHireMe = false) {
        if (array.length === 0) {
            return (
                <div className="Empty">
                    <p className="NoneText">None yet!</p>
                    {showHireMe ? <a href={`mailto:${config.email}`} className="HireText">Hire me!</a> : null}
                </div>
            )
        }

        return array.map(entry => (
            <Fragment key={entry.name}>
                <h6><a href={entry.url}>{entry.name}</a></h6>

                <ul>
                    {entry.notes.map(note => (
                        <li key={note}>{note}</li>
                    ))}
                </ul>
            </Fragment>
        ))
    }

    getCardLayout(title, type, data, isOneRow = false) {
        switch (type) {
            case "multiple":
                const content = data.map((entry, index) => entry.title
                    ? (
                        <React.Fragment key={entry.title}>
                            <h4 className="contentSection"><span>{entry.title}</span></h4>
                            <Row>{entry.data}</Row>
                        </React.Fragment>
                    )
                    : (<Col key={index}>{entry}</Col>))

                const CardLayout = isOneRow ? <Row>{content}</Row> : null;

                return (
                    <Card>
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <hr />
                            <div className="card-text">{CardLayout ? CardLayout : content}</div>
                        </Card.Body>
                    </Card>
                )
            case "list":
                return (
                    <Card>
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <hr />
                            <div className="card-text listSection">{data}</div>
                        </Card.Body>
                    </Card>
                )
            case "text":
                return (
                    <Card>
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text className="experienceDescription">{data}</Card.Text>
                        </Card.Body>
                    </Card>
                )
            default:
                return <Card></Card>
        }
    }

    render() {
        const { isVisible } = this.props;

        return (
            <section id="Experience">
                <Container className={isVisible ? "Visible" : ""}>
                    <h1 className="sectionTitle">Experience</h1>
                    <p className="sectionDesc">You can also view my resume (in PDF) <a href="/resume">here</a></p>

                    <CardColumns>
                    {this.getCardLayout("Working Experience", "list", this.getExperience(config.workingExperience, true))}

        
                        {this.getCardLayout("Academic Experience", "list", this.getExperience(config.AcademicExperience, true))}
                        {this.getCardLayout("Teaching Experience", "list", this.getExperience(config.TeachingExperience, true))}

                        {/* {this.getCardLayout(config.experienceDescriptionCard1.name, "text", config.experienceDescriptionCard1.content)} */}
   
                        {/* {this.getCardLayout(config.experienceDescriptionCard2.name, "text", config.experienceDescriptionCard2.content)} */}
                        {this.getCardLayout("Education", "list", this.getExperience(config.education))}

                        {/* {this.getCardLayout("Services", "multiple", this.getEntries(this.servicesBinding), true)} */}
                    </CardColumns>
                </Container>

                {/* <Counters /> */}
            </section>
        );
    }
}

export default withIsVisible(Experience);