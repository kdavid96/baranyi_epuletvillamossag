import './styles.css';

import { FacebookProvider, Like } from 'react-facebook';

import { FaFacebook } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md'
import { BsFillTelephoneFill } from 'react-icons/bs';
import Fade from 'react-reveal/Fade';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavbarContainer } from './style';
import React from 'react';

export default function Header({isOpen, setOpen}) {    
    return(
        <Navbar sticky="top" bg="dark" variant="dark" style={{minHeight: '160px', boxShadow: '0 0 5px grey', zIndex: '3000', position: 'fixed', width: '100%'}}>
            <NavbarContainer>
                <Fade top>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" style={{maxWidth: '300px'}}>
                <Nav
                    className="me-auto my-2 my-lg-0 navBar"
                    style={{ maxHeight: '100px'}}
                    navbarScroll
                >
                </Nav>
                </Navbar.Collapse>
                {/* <div className="hamburger-div">
                <Fade top>
                    <Hamburger style={{display: 'none'}} toggled={isOpen} toggle={setOpen} color="black"/>
                </Fade>
                </div> */}
                </Fade>
                <Fade top>
                    <div className="navbarBrandContainer" style={{display: 'flex', flexDirection: 'row', justifyContent: 'start', alignItems: 'center'}}>
                        <a href="#about"><img id="logo" src="./images/logo_official.webp" alt="profile_picture" style={{borderRadius: '50%', border: '4px solid #88D136', width: 'min(10vw, 120px, 95vw)', height: 'auto', marginRight: '45px'}}/></a>
                        <span className="navbarBrand" href="#about">
                            <span style={{color: '#88D136'}}>Baranyi</span> <span style={{color: 'grey'}}>Épületvillamosság</span><span className='slogan' style={{color: 'grey', fontSize: '1.5rem', position: 'absolute', marginTop: '3rem'}}>"villanyszerelés okosan"</span>
                            <span id="phone-small">
                                <p className="phone-small-p"><a rel="noreferrer" target="_blank" href="tel:+36306991126"style={{textDecoration: 'none', color: 'grey'}}><span style={{position: 'relative', top: '-3px'}}><BsFillTelephoneFill /></span>+36 30 699 11 26</a></p>
                            </span>
                        </span>
                    </div>
                </Fade>
                <Fade top>
                    <div className="contact-info">
                        <p className="phoneNumber"><a rel="noreferrer" target="_blank" href="tel:+36306991126"style={{textDecoration: 'none', color: 'grey'}}><span style={{position: 'relative', top: '-3px'}}><BsFillTelephoneFill /></span>+36 30 699 11 26</a></p>
                        <p className="phoneNumber"><a rel="noreferrer" ttarget="_blank" href="mailto:baranyiepuletvill@gmail.com"style={{textDecoration: 'none', color: 'grey'}}><span style={{position: 'relative', top: '-3px'}}><MdAlternateEmail /></span>baranyiepuletvill@gmail.com</a></p>
                        <p className="phoneNumber"><a rel="noreferrer" target="_blank" href="https://www.facebook.com/baranyiepuletvill" style={{textDecoration: 'none', color: 'grey'}}><span style={{position: 'relative', top: '-3px'}}><FaFacebook /></span>/baranyiepuletvill</a></p>
                        <FacebookProvider appId="123456789">
                            <Like href="http://www.facebook.com" colorScheme="dark" showFaces share />
                        </FacebookProvider>
                    </div>
                </Fade>
            </NavbarContainer>
        </Navbar>
    )
}