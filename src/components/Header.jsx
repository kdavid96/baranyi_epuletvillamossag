import './styles.css';

import Fade from 'react-reveal/Fade';
import Hamburger from 'hamburger-react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavbarContainer } from './style';
import React from 'react';
import { scroll } from 'react-scroll';

export default function Header({isOpen, setOpen}) {
    return(
        <Navbar sticky="top" bg="dark" variant="dark" style={{minHeight: '80px', backgroundColor: '#88D136 !important', boxShadow: isOpen ? 'none' : '0 0 5px grey', zIndex: '3000'}}>
            <NavbarContainer style={{width: '95vw', justifyContent: 'space-evenly'}}>
                <Fade top>
                    <Navbar.Brand href="#about">
                    Baranyi Épületvillamosság
                    </Navbar.Brand>
                </Fade>
                <Fade top>
                    <p className="phoneNumber" style={{padding: '0', margin: '0', color: 'red', fontWeight: 'bold', position: 'relative', left: '6vw'}}>+36 30 699 11 26</p>
                </Fade>
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
                    <Nav.Link href="#about" style={{color: 'white'}}>Rólunk</Nav.Link>
                    <Nav.Link href="#work" style={{color: 'white'}}>Szolgáltatások</Nav.Link>
                    <Nav.Link href="#contact" style={{color: 'white'}}>Kapcsolat</Nav.Link>

                </Nav>
                </Navbar.Collapse>
                <Fade top>
                <Hamburger style={{display: 'none'}} toggled={isOpen} toggle={setOpen} color="black"/>
                </Fade>
                </Fade>
            </NavbarContainer>
        </Navbar>
    )
}
