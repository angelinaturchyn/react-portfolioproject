import { Link } from 'react-scroll'
import {useState} from "react";
import {Container} from "react-bootstrap";

export const AboutMe = () => {

    const [activeLink] = useState('home');
    const [click, setClick] = useState(false)

    return (
        <Container className={'aboutme'} id="aboutme">
            <h1>Who am I?</h1>
            <h2>My name is Angelina Turchyn </h2>
            <h3>I'm a QA Engineer</h3>
            <h4>Life-learner, and a self-thought QA Automation Engineer with 4+ year in Software Testing |
                Passionate about using my logic and intuition to find best solutions for complex problems. Specializing in Automation Testing(Playwright, Cypress, WebdriverIO)
                TDD, BDD Cucumber, API Testing, Mobile, and Manual Testing |
                I would love to grow and start developing software. This is my first website built with React.
            </h4>
        </Container>
    )
}
