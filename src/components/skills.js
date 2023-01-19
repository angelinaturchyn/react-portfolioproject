import * as React from 'react';
import {useRef, useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import {Col} from "react-bootstrap";

export const Skills = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

        return (
            <div className='skills' id='skills'>
                <h1>Skills</h1>

                <Row  className="g-4">

                <Card border="primary" style={{ width: '25rem' }}>

                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                        <Card.Title>Primary Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />


                <Card border="success" style={{ width: '25rem' }}>
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                        <Card.Title>Success Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />

                <Card border="danger" style={{ width: '25rem' }}>
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                        <Card.Title>Danger Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />
                    <Card border="secondary" style={{ width: '25rem' }}>
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title>Danger Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <br />
                    <Card border="info" style={{ width: '25rem' }}>
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title>Danger Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <br />
                    <Card border="light" style={{ width: '25rem' }}>
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title>Danger Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <br />
                </Row>

            </div>
    )
}

//<Carousel activeIndex={index} onSelect={handleSelect}>
//         <Carousel.Item >
//             <h1>Skills </h1>
//             <h6>Languages:  Javascript, Java</h6>
//             <h6>Smoke, Integration Testing, End- to-End Testing</h6>
//             <h6> Technologies: Git, GitHub, HTML, CSS, React.js, Node.js</h6>
//             <h6>System and User Acceptance Testing </h6>
//             <h6> Automation Tools: Playwright, Cypress, Appium Mobile automation</h6>
//             <h6>BDD (Behavior Driven Development)</h6>
//             <h6> TDD (Test Driven Development) using Cucumber in Gherkins format</h6>
//
//         </Carousel.Item>
//         <Carousel.Item>
//             <h1>Skills</h1>
//             <h6> Database: MongoDB, SQL</h6>
//             <h6> API Testing: Postam, REST API, Swagger</h6>
//             <h6> Test Approaches: Waterfall, Agile/Scrum, SDLC, STLC</h6>
//             <h6> Defect Management Tools: JIRA, TestRail, Shortcut</h6>
//             <h6>Operating Systems:  Apple macOS, Microsoft Windows, Google's Android OS, Kali Linux</h6>
//             <h6>Functional GUI, UI, Compatibility, Sanity, Regression, Cross-browser,</h6>
//             <h6>Black box, grey box and white box of the application</h6>
//
//         </Carousel.Item>
//     </Carousel>
