import * as React from 'react';
import {useRef, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import skillsImage from "../assets/img/NFT planet with circles around it.png";

export const Skills = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

        return (
            <Container className={'skills'} id="skills">
                <h2>Skills</h2>
                    <Container fluid="md">
                        <Row>
                            <Col>
                                <img className="skillsImage" src={skillsImage} alt="Header Img"/>
                                <h6>Languages:  Javascript, Java</h6>
                            </Col>
                            <Col>
                                <img className="skillsImage" src={skillsImage} alt="Header Img"/>
                                <h6>Languages:  Javascript, Java</h6>
                            </Col>
                            <Col>
                                <img className="skillsImage" src={skillsImage} alt="Header Img"/>
                                <h6>Languages:  Javascript, Java</h6>
                            </Col>
                        </Row>
                    </Container>
            </Container>


    )
}



//                 <h6>Languages:  Javascript, Java</h6>
//                 <h6>Smoke, Integration Testing, End- to-End Testing</h6>
//                 <h6> Technologies: Git, GitHub, HTML, CSS, React.js, Node.js</h6>
//                 <h6>System and User Acceptance Testing </h6>
//                 <h6> Automation Tools: Playwright, Cypress, Appium Mobile automation</h6>
//                 <h6>BDD (Behavior Driven Development)</h6>
//                 <h6> TDD (Test Driven Development) using Cucumber in Gherkins format</h6>
//
//
//                 <h6> Database: MongoDB, SQL</h6>
//                 <h6> API Testing: Postam, REST API, Swagger</h6>
//                 <h6> Test Approaches: Waterfall, Agile/Scrum, SDLC, STLC</h6>
//                 <h6> Defect Management Tools: JIRA, TestRail, Shortcut</h6>
//                 <h6>Operating Systems:  Apple macOS, Microsoft Windows, Google's Android OS, Kali Linux</h6>
//                 <h6>Functional GUI, UI, Compatibility, Sanity, Regression, Cross-browser,</h6>
//                 <h6>Black box, grey box and white box of the application</h6>
