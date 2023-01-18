import { Navbar, Nav, Container } from "react-bootstrap";
import {useEffect, useState} from "react";
import { SocialIcon } from 'react-social-icons';
import { HashLink } from 'react-router-hash-link';
import {BrowserRouter as Router} from "react-router-dom";
import * as Scroll from 'react-scroll';
import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'



export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false)
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

                </Navbar.Collapse>
                </Container>
        </Navbar>

    );
}








// <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
//     <Container>
//         <Navbar.Brand  href="home">Angelina Turchyn</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="me-auto">
//                 <Nav.Link  href="/aboutme" className={activeLink === "aboutme" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateLink('aboutme')}>About me</Nav.Link>
//                 <Link  to="skills" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Skills</Link>
//                 <Nav.Link href="/projects" className={activeLink === "projects" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateLink('projects')}>Projects</Nav.Link>
//             </Nav>
//             <SocialIcon url="https://linkedin.com/in/angelinaturchyn"/>
//             <SocialIcon url="https://github.com/angelinaturchyn"/>
//             <SocialIcon url="https://angelinaturchyn@gmail.com"/>
//             <span className="navbar-text" >
//                         <HashLink to='#connect'>
//                       <button className="vvd"><span>Let’s Connect</span></button>
//                          </HashLink>
//                           </span>
//         </Navbar.Collapse>
//     </Container>
// </Navbar>
