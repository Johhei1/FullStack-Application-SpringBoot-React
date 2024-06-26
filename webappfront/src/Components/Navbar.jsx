import React from 'react';
import { Navbar, Nav} from 'react-bootstrap'


const NavBar = () =>
  {
    return (
      <Navbar bg="dark" data-bs-theme="dark" expand="md" className="fixed-top">
        <Navbar.Brand href="/" className="navB">
         Home </Navbar.Brand>
         <br></br>
      </Navbar>
    )
  }
  
  export default NavBar