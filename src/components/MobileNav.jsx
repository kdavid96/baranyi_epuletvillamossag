import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { MobileNavContainer, MobileNavNav } from './style';

export default function MobileNav({isOpen, setOpen}) {
    return (
        <div>
            {isOpen ? <MobileNavContainer>
                <MobileNavNav>
                    <Nav.Link style={{color: 'white'}} href="#about" onClick={() => {setOpen(false)}}>Rólam</Nav.Link>
                    <Nav.Link style={{color: 'white'}} href="#work" onClick={() => {setOpen(false)}}>Szolgáltatások</Nav.Link>
                    <Nav.Link style={{color: 'white'}} href="#contact" onClick={() => {setOpen(false)}}>Kapcsolat</Nav.Link>
                </MobileNavNav>
            </MobileNavContainer> : ''}
        </div>
    )
}
