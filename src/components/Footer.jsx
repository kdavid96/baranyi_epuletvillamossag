import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Copyright } from './style';
import './styles.css';

export default function Footer() {
    return (
        <Navbar expand="lg" variant="light" bg="light" className="footer">
            <Container style={{display: 'flex', justifyContent: 'center'}}>
                <Navbar.Brand href=""><Copyright /> 2021 Baranyi Épületvillamosság</Navbar.Brand>
            </Container>
        </Navbar>
    )
}
