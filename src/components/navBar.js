import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useEffect, useState} from "react";

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
                <Navbar.Brand  href="#home">Angelina Turchyn</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link  href="aboutme" className={activeLink === "home" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateLink('home')}>About me</Nav.Link>
                        <Nav.Link href="skills" className={activeLink === "skills" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="projects" className={activeLink === "projects" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateLink('projects')}>Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                             {/*<a href="#"><img src={} alt="" /></a>*/}
                             {/*<a href="#"><img src={} alt="" /></a>*/}
                             {/*<a href="#"><img src={} alt="" /></a>*/}
                            </div>
                        <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect!</span> </button>
                          </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

}

