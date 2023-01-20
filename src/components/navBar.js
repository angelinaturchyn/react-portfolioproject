import { Navbar, Nav, Container } from "react-bootstrap";
import {useState} from "react";
import { SocialIcon } from 'react-social-icons';
import { Link } from 'react-scroll'



export const NavBar = () => {

    const [activeLink] = useState('home');
    const [click, setClick] = useState(false)

    const closeMenu = () => setClick(false)
       return (
        <Navbar bg="black" variant="dark"expand="lg" >
            <Container fluid>
            <Navbar.Brand  href="home"> Angelina Turchyn </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '200px' }}
                        navbarScroll
                    >
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

