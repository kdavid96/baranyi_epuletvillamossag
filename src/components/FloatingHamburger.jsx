import { Fade } from 'react-reveal';
import Hamburger from 'hamburger-react'
import React from 'react';

export default function MobileNav({isOpen, setOpen}) {
    return(
        <Fade left>
            <div className="hamburger-div">
                <Hamburger style={{display: 'none'}} toggled={isOpen} toggle={setOpen} color="black"/>
            </div>
        </Fade>
    )
}