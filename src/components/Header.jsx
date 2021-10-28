import './styles.css';

import { FaFacebook } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';
import Hamburger from 'hamburger-react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavbarContainer } from './style';
import React from 'react';

export default function Header({isOpen, setOpen}) {
    return(
        <Navbar sticky="top" bg="dark" variant="dark" style={{minHeight: '160px', backgroundColor: '#88D136 !important', boxShadow: isOpen ? 'none' : '0 0 5px grey', zIndex: '3000'}}>
            <NavbarContainer style={{width: '95vw', justifyContent: 'space-evenly'}}>
                <Fade top>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" style={{maxWidth: '300px'}}>
                <Nav
                    className="me-auto my-2 my-lg-0 navBar"
                    style={{ maxHeight: '100px'}}
                    navbarScroll
                >
                    {/*<Nav.Link href="#about" style={{color: 'white'}}><Button style={{backgroundColor: '#88D136', border: '0', borderRadius: '35px'}}>Rólunk</Button></Nav.Link>
                    <Nav.Link href="#work" style={{color: 'white'}}><Button style={{backgroundColor: '#88D136', border: '0', borderRadius: '35px'}}>Szolgáltatások</Button></Nav.Link>
                    <Nav.Link href="#contact" style={{color: 'white'}}><Button style={{backgroundColor: '#88D136', border: '0', borderRadius: '35px'}}>Kapcsolat</Button></Nav.Link>*/}
                    {/*<Nav.Link href="#about" style={{color: 'white'}}>Rólunk</Nav.Link>
                    <Nav.Link href="#work" style={{color: 'white'}}>Szolgáltatások</Nav.Link>
                <Nav.Link href="#contact" style={{color: 'white'}}>Kapcsolat</Nav.Link>*/}

                </Nav>
                </Navbar.Collapse>
                <Fade top>
                <Hamburger style={{display: 'none'}} toggled={isOpen} toggle={setOpen} color="black"/>
                </Fade>
                </Fade>
                <Fade top>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Navbar.Brand href="#about">
                            Baranyi <span style={{color: 'grey'}}>Épületvillamosság</span>
                        </Navbar.Brand>
                        <img src="./images/logo_official.webp" alt="profile_picture" style={{borderRadius: '50%', border: '4px solid #88D136', width: 'min(10vw, 120px, 95vw)', height: 'auto'}}/>
                        <span>A kecskeméti <span style={{color: '#88D136'}}>villanyszerelő</span></span>
                    </div>
                </Fade>
                <Fade top>
                    <div className="contact-info">
                        <p className="phoneNumber" style={{padding: '0', margin: '0', color: 'blue', fontWeight: 'bold', position: 'relative', left: '6vw'}}><a  style={{textDecoration: 'none', color: 'blue'}}href="tel:+36306991126">+36 30 699 11 26</a></p>
                        <p className="phoneNumber" style={{padding: '0', margin: '0', color: 'blue', fontWeight: 'bold', position: 'relative', left: '6vw'}}><a  style={{textDecoration: 'none', color: 'blue'}}>baranyiepuletvill@gmail.com</a></p>
                        <p className="phoneNumber" style={{padding: '0', margin: '0', color: 'blue', fontWeight: 'bold', position: 'relative', left: '6vw'}}><a  style={{textDecoration: 'none', color: 'blue'}}><FaFacebook /></a></p>
                    </div>
                </Fade>
            </NavbarContainer>
        </Navbar>
    )
}
