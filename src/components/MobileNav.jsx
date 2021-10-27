import { MobileNavContainer, MobileNavNav } from './style';

import Nav from 'react-bootstrap/Nav';
import React from 'react';

export default function MobileNav({isOpen, setOpen}) {
    return (
        <div className="mobileNavAnim" style={{transform: isOpen ? 'translateX(0)' : 'translateX(-200%)', position: isOpen ? 'fixed' : 'relative',
        zIndex: '2001'}}>
            <MobileNavContainer>
                <MobileNavNav>
                    <Nav.Link style={{color: 'white'}} href="#about" onClick={() => {setOpen(false)}}>Rólunk</Nav.Link>
                    <Nav.Link style={{color: 'white'}} href="#work" onClick={() => {setOpen(false)}}>Szolgáltatások</Nav.Link>
                    <Nav.Link style={{color: 'white'}} href="#contact" onClick={() => {setOpen(false)}}>Kapcsolat</Nav.Link>
                </MobileNavNav>
            </MobileNavContainer>
        </div>
    )
}
