import './styles.css';

import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { FaFacebook } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavbarContainer } from './style';
import React from 'react';

export default function Header({isOpen, setOpen, isScrolled, setScrolled}) {   
    
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            setScrolled(true);
            document.getElementById("logo").style.top = "-50px";
            document.getElementById("logo").style.width = "150px";
            document.getElementById("logo").style.height = "150px";
            document.getElementById("logo").style.left = "100px";
        } else {
            setScrolled(false);
            document.getElementById("logo").style.top = "-35px";
            document.getElementById("logo").style.width = "250px";
            document.getElementById("logo").style.height = "250px";
            document.getElementById("logo").style.left = "0px";
        }
    } 
    
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
                </Fade>
                <Fade top>
                    <div className="navbarBrandContainer" >
                        <div className="nav-links">
                            <Nav.Link href="#about" onClick={() => {setOpen(false)}}>Rólunk</Nav.Link>
                            <Nav.Link style={{color: 'white', fontWeight: '800', fontSize: '1.5rem', padding: '.5rem 2rem'}} href="#work" onClick={() => {setOpen(false)}}>Szolgáltatások</Nav.Link>
                            <Nav.Link style={{color: 'white', fontWeight: '800', fontSize: '1.5rem', padding: '.5rem 2rem'}} href="#contact" onClick={() => {setOpen(false)}}>Kapcsolat</Nav.Link>
                        </div>
                        <div id="logo-container">
                            <div className="logo-container-inner">
                                <a href="#about" style={{width: '100%',height: '100%',justifyContent: 'center',alignItems: 'center',display: 'flex'}}>
                                    <div className={!isScrolled ? 'logo-a' : 'logo-a logo-hide-under-1000px logo-right logo-scroll'} id="logo" style={{ backgroundImage: "url(/images/logo_official.webp)" }}></div>
                                </a>
                            </div>
                            <span className="slogan" style={{display: isScrolled ? 'none' : 'block'}}>"Villanyszerelés okosan"</span>
                        </div>
                        <div className={!isScrolled ? 'contact-info-header hide' : 'contact-info-header-inline'} id="contact-info">
                            <p className="phoneNumber"><div className="custom-tooltip">+36 30 699 11 26</div><a rel="noreferrer" target="_blank" href="tel:+36306991126"style={{textDecoration: 'none'}}><span style={{position: 'relative', top: '-3px'}}><BsFillTelephoneFill /></span></a></p>
                            <p className="phoneNumber"><div className="custom-tooltip">baranyiepuletvill@gmail.com</div><a rel="noreferrer" target="_blank" href="mailto:baranyiepuletvill@gmail.com"style={{textDecoration: 'none'}}><span style={{position: 'relative', top: '-3px'}}><MdEmail /></span></a></p>
                            <p className="phoneNumber"><a rel="noreferrer" target="_blank" href="https://www.facebook.com/baranyiepuletvill" style={{textDecoration: 'none'}}><span style={{position: 'relative', top: '-3px'}}><FaFacebook /></span></a></p>
                            <div class="fb-like" data-href="https://www.facebook.com/baranyiepuletvill/" data-width="" data-layout="box_count" data-action="like" data-size="small" data-share="false"></div>
                            <iframe title="like" src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Fbaranyiepuletvill%2F&width=62&layout=box_count&action=like&size=small&share=false&height=65&appId=1134536467368844" width="62" height="65" style={{border:'none', overflow:'hidden'}} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                        </div>
                    </div>
                </Fade>
            </NavbarContainer>
        </Navbar>
    )
}