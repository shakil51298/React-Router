import React from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


const Header = () => {
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">
                    Navbar
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/features">Features</Nav.Link>
                    <Nav.Link as={Link} to="/pricing">Pricing</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-light">Search</Button>
             </Form>
            </Navbar>
        </>
    );
};

export default Header;