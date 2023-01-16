import 'react-multi-carousel/lib/styles.css';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';

export const Skills = () => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: {max: 4000, min: 3000},
            items: 5
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 3
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1
        }
    }

        return (
            <Carousel>
                <Carousel.Item>
                    <h1>Skills</h1>
                    <p>Languages:  Javascript, Java</p>
                    <p>Database: MongoDB, SQL</p>
                    <p>API Testing: Postam, REST API, Swagger</p>
                    <p>Test Approaches: Waterfall, Agile/Scrum, SDLC, STLC</p>
                    <p>Defect Management Tools: JIRA, TestRail, Shortcut</p>
                    <p> Smoke, Integration Testing, End- to-End Testing</p>
                    <p> Technologies: Git, GitHub, HTML, CSS, React.js, Node.js</p>
                    <p>System and User Acceptance Testing for every modification in the application and new build</p>
                    <p>Operating Systems:  Apple macOS, Microsoft Windows, Google's Android OS, Kali Linux</p>
                    <p> Automation Tools: Playwright, Cypress, Appium Mobile automation</p>
                    <p>Functional GUI, UI, Compatibility, Sanity, Regression, Cross-browser,</p>
                </Carousel.Item>
            </Carousel>
    )
}
