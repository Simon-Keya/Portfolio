import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom
import './Navbar.scss';

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-dark" variant="dark">
      <Container>
        <Navbar.Brand as={NavLink} to="/">Logo</Navbar.Brand> {/* Use NavLink instead of href */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" fill defaultActiveKey="/home">
            <Nav.Item>
              {/* @ts-ignore */}
              <Nav.Link as={NavLink} to="/" exact activeClassName="active">Home</Nav.Link> {/* Use NavLink instead of href */}
            </Nav.Item>
            <Nav.Item>
              {/* @ts-ignore */}
              <Nav.Link as={NavLink} to="/about" activeClassName="active">About</Nav.Link> {/* Use NavLink instead of href */}
            </Nav.Item>
            <Nav.Item>
              {/* @ts-ignore */}
              <Nav.Link as={NavLink} to="/skills" activeClassName="active">Skills</Nav.Link> {/* Use NavLink instead of href */}
            </Nav.Item>
            <Nav.Item>
              {/* @ts-ignore */}
              <Nav.Link as={NavLink} to="/projects" activeClassName="active">Projects</Nav.Link> {/* Add NavLink for Skills page */}
            </Nav.Item>
            <Nav.Item>
              {/* @ts-ignore */}
              <Nav.Link as={NavLink} to="/contact" activeClassName="active">Contact</Nav.Link> {/* Use NavLink instead of href */}
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
