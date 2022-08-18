import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logout from './Logout'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Nav1 = () => {
  
  const navigate = useNavigate()
  return (
   <div>
        <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
              
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link><button className='btn btn-outline' onClick={()=> navigate('/flights')} to={'/flights'}>To Flights</button></Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/about" >
            About
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </div>


// <nav className="navbar navbar-expand-lg bg-dark">
    //   <div className="container-fluid">
    //     <a className="navbar-brand"><Link to={'/'}>To Home Page</Link></a>
    //     <a className="nav-link active"><Link to={'/about'}>To About Page</Link></a>
    //     <a className="nav-link"><Link to={'/flights'}>To Flights</Link></a>
    //     <a className="nav-link"><Link to={'/login'}>To Login</Link></a>
  )
}

export default Nav1


