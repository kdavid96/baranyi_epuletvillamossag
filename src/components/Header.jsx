import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Hamburger from 'hamburger-react'
import Fade from 'react-reveal/Fade';
import { NavbarContainer } from './style';
import './styles.css';

export default function Header({isOpen, setOpen}) {
    return(
        <Navbar sticky="top" bg="dark" variant="dark" style={{minHeight: '80px', backgroundColor: '#88D136 !important'}}>
            <NavbarContainer>
                <Fade top>
                    <Navbar.Brand href="#home">
                        <img
                        alt=""
                        src="/images/logo.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        />{' '}
                    Baranyi Épületvillamosság
                    </Navbar.Brand>
                </Fade>
                <Fade top>
                    <p style={{padding: '0', margin: '0', color: 'red', fontWeight: 'bold'}}>+36301234567</p>
                </Fade>
                <Fade top>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" style={{maxWidth: '300px'}}>
                <Nav
                    className="me-auto my-2 my-lg-0 navBar"
                    style={{ maxHeight: '100px'}}
                    navbarScroll
                >
                    <Nav.Link href="#about">Rólunk</Nav.Link>
                    <Nav.Link href="#work">Szolgáltatások</Nav.Link>
                    <Nav.Link href="#contact">Kapcsolat</Nav.Link>
                </Nav>
                </Navbar.Collapse>
                <Fade top>
                <Hamburger style={{display: 'none'}} toggled={isOpen} toggle={setOpen} color="white"/>
                </Fade>
                </Fade>
            </NavbarContainer>
        </Navbar>
    )
}
