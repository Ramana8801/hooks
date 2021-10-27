import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
//import './Header.css';
class Header extends React.Component {
  render() {
    return (<div className="Row1">

        <Navbar bg="SlateBlue" variant="white" expand="md" class="navbar" >
        <Navbar.Brand href="#" >{''}{''}</Navbar.Brand>

  <Navbar.Brand href="#" color="white" >FILM Stars</Navbar.Brand>
  
  <Navbar.Collapse id="navbarScroll">
    <Nav

      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >

      


    </Nav>




  </Navbar.Collapse>
  <Nav>
       <Nav.Link >{''}{''}</Nav.Link>
       <NavDropdown title="Login" id="navbarScrollingDropdown">
        <NavDropdown.Item href="#SIGNIN">SignIn</NavDropdown.Item>
        <NavDropdown.Item href="#SIGNUP">SignUp</NavDropdown.Item>
        </NavDropdown>
      <Nav.Link >{''}{''}</Nav.Link>
 
      <Nav.Link >{''}{''}</Nav.Link>
      <NavDropdown title="Language" id="navbarScrollingDropdown">
        <NavDropdown.Item href="#Eng">Eng</NavDropdown.Item>
        <NavDropdown.Item href="#Telugu">Telugu</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#Hindi">Hindi</NavDropdown.Item>

      </NavDropdown>
    </Nav>
</Navbar>


    </div>
    )
  }
}
export default Header;