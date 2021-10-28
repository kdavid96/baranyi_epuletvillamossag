import './styles.css';

import { FaFacebook } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md'
import { BsFillTelephoneFill } from 'react-icons/bs';
import Fade from 'react-reveal/Fade';
import Hamburger from 'hamburger-react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavbarContainer } from './style';
import React from 'react';

export default function Header({isOpen, setOpen}) {
    return(
        <Navbar sticky="top" bg="dark" variant="dark" style={{minHeight: '160px', boxShadow: '0 0 5px grey', zIndex: '3000'}}>
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
                <div className="hamburger-div">
                <Fade top>
                    <Hamburger style={{display: 'none'}} toggled={isOpen} toggle={setOpen} color="black"/>
                </Fade>
                </div>
                </Fade>
                <Fade top>
                    <div className="navbarBrandContainer" style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <span className="navbarBrand" href="#about">
                            Baranyi <span style={{color: 'grey'}}>Épületvillamosság</span>
                        </span>
                        <img src="./images/logo_official.webp" alt="profile_picture" style={{borderRadius: '50%', border: '4px solid #88D136', width: 'min(10vw, 120px, 95vw)', height: 'auto'}}/>
                        <span className="navbarBrand">A kecskeméti <span style={{color: '#88D136'}}>villanyszerelő</span></span>
                    </div>
                </Fade>
                <Fade top>
                    <div className="contact-info">
                        <p className="phoneNumber"><a rel="noreferrer" target="_blank" href="tel:+36306991126"style={{textDecoration: 'none', color: '#171717'}}><span style={{position: 'relative', top: '-3px'}}><BsFillTelephoneFill /></span>+36 30 699 11 26</a></p>
                        <p className="phoneNumber"><a rel="noreferrer" ttarget="_blank" href="email:baranyiepuletvill@gmail.com"style={{textDecoration: 'none', color: '#171717'}}><span style={{position: 'relative', top: '-3px'}}><MdAlternateEmail /></span>baranyiepuletvill@gmail.com</a></p>
                        <p className="phoneNumber"><a rel="noreferrer" target="_blank" href="https://www.facebook.com/baranyiepuletvill" style={{textDecoration: 'none', color: '#171717'}}><span style={{position: 'relative', top: '-3px'}}><FaFacebook /></span>/baranyiepuletvill</a></p>
                    </div>
                </Fade>
            </NavbarContainer>
        </Navbar>
    )
}