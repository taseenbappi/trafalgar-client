import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo.svg';

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" >
            <Container>
                <Navbar.Brand href="#home"><img src={logo} alt="" className='img-fluid' /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/home#services">Services</Nav.Link>
                        <Nav.Link href="/home#find-doctor">Find a doctor</Nav.Link>
                        <Nav.Link href="/home#apps">Apps</Nav.Link>
                        <Nav.Link href="/home#testimonials">Testimonials</Nav.Link>
                        <Nav.Link href="/home#about">About us</Nav.Link>

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;