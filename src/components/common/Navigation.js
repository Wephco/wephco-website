import React, { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import Button from 'react-bootstrap/Button'
import ContactUs from './ContactUsModal';

const Navigation = () => {

  const [contactModalOpen, setContactModalOpen ] = useState(false);

  const openContactModal = () => {
    setContactModalOpen(true);
  }

  const closeContactModal = () => {
    setContactModalOpen(false);
  }

  let contact = (
    <ContactUs open={contactModalOpen} close={closeContactModal} />
  )


  return (
    <Navbar expand='lg'>
      {contact}
      <Container>
        <Navbar.Brand>
          <Link to='/'>
            <img src={logo} alt='WephCo Logo'/>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
          <Nav className='me-auto'>
            <Nav.Link className='p-4'>
              <NavLink to='/'>
                <p>Home</p>
              </NavLink>
            </Nav.Link>
            <Nav.Link className='p-4'>
            <NavLink to='/real-estate'>
              <p>Real Estate</p>
            </NavLink>
            </Nav.Link>
            <Nav.Link className='p-4'>
            <NavLink to='/logistics'>
              <p>Logistics</p>
            </NavLink>
            </Nav.Link>
            <Nav.Link className='p-4'>
            <NavLink to='/'>
              <p>Our Foundation</p>
            </NavLink>
            </Nav.Link>
            <p className='p-4'>
            <a target="_blank" rel='noreferrer' href="https://fx.wephco.com">
              <p>Wephco Fx</p>
            </a>
            </p>
          </Nav>
          <Button onClick={openContactModal} className='bg-wephco-blue'>Contact Us</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation;
