import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useEffect, useState} from "react";
import { SocialIcon } from 'react-social-icons';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                seScrolled(true);
            } else {
                seScrolled(false)
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll)
    }, [])


    const onUpdateLink = (value) => {
        setActiveLink(value)
    }
    // const FontLink = () => {
    //     return (
    //         <div className="card">
    //       <span className="font-link">
    //           This is with Font Link. We are linking the fonts from the Google Fonts.
    //       </span>
    //         </div>
    //     )
    // };

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand  href="home">Angelina Turchyn</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link  href="aboutme" className={activeLink === "aboutme" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateLink('aboutme')}>About me</Nav.Link>
                        <Nav.Link href="skills" className={activeLink === "skills" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="projects" className={activeLink === "projects" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateLink('projects')}>Projects</Nav.Link>
                    </Nav>
                    <SocialIcon url="https://linkedin.com/in/angelinaturchyn" />
                    <SocialIcon url="https://github.com/angelinaturchyn" />
                    <SocialIcon url="https://angelinaturchyn@gmail.com" />
                    <span className="navbar-text" >
                        <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect!</span>  </button>
                          </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

}

