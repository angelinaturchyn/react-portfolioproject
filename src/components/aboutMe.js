import { Link } from 'react-scroll'
import {useState} from "react";
import {Container} from "react-bootstrap";

export const AboutMe = () => {

    const [activeLink] = useState('home');
    const [click, setClick] = useState(false)
    return (
        <Container className={'aboutme'} id="aboutme">
            <h2>Who am I?</h2>
            <h4>My name is Angelina Turchyn, I'm a QA Engineer</h4>
            <h5>Life-learner, and a self-thought QA Automation Engineer with 4+ year in Software Testing.
                Passionate about using my logic and intuition to find best solutions for complex problems. Specializing in Automation Testing(Playwright, Cypress, WebdriverIO)
                TDD, BDD Cucumber, API Testing, Mobile, and Manual Testing.
                I would love to grow and start developing software. This is my first website built with React.
            </h5>
        </Container>
    )
}
