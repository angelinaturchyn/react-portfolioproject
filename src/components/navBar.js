import { Navbar, Nav, Container } from "react-bootstrap";
import {useState} from "react";
import { SocialIcon } from 'react-social-icons';
import { Link } from 'react-scroll'



export const NavBar = () => {

    const [activeLink] = useState('home');
    const [click, setClick] = useState(false)

    const closeMenu = () => setClick(false)
       return (
        <Navbar expand="lg" >
            <Container>
            <Navbar.Brand  href="home">Angelina Turchyn</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className={activeLink === "aboutme" ? "active navbar-link" : "navbar-link"} to="aboutme" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>About me </Link>
                        <Link className={activeLink === "aboutme" ? "active navbar-link" : "navbar-link"} to="skills" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Skills </Link>
                        <Link className={activeLink === "aboutme" ? "active navbar-link" : "navbar-link"} to="/" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Projects </Link>
                    </Nav>
                    <SocialIcon url="https://linkedin.com/in/angelinaturchyn"/>
                    <SocialIcon url="https://github.com/angelinaturchyn"/>
                    <SocialIcon url="https://angelinaturchyn@gmail.com"/>
                    <span className="navbar-text" >
                    <button className="vvd"><span>Let’s Connect</span></button>
                        </span>
                </Navbar.Collapse>
                </Container>
        </Navbar>
    );
}

