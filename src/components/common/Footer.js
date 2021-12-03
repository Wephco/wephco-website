import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import logo from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-light'>
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <div className="mt-5">
              <img src={logo} alt='Logo' />
            </div>
            <div className="mt-2">
              {/* <p className="">
                We are responsible, accountable, respectful, effective, efficient. We encourage innovation to meet challenges. We foster an environment of collaboration.
              </p> */}
            </div>
          </Col>
          <Col xs={12} md={4}>
            <h4 className="mt-5">
              Services
            </h4>
            <h6 className='mt-3'>
              <Link className='text-dark' to='/real-estate'>Real Estate</Link>
            </h6>
            <h6 className='mt-3'>
              <Link className='text-dark' to='/logistics'>Logistics</Link>
            </h6>
            <a target='_blank' rel='noreferrer' style={{textDecoration:'none', color:'white'}} href="https://fx.wephco.com">
            <h6 className='mt-3 text-dark'>WehpCoFx</h6>
            </a>
            
          </Col>
          <Col xs={12} md={4}>
            <h4 className="mt-5">
              Follow Us
            </h4>
            <Row>
              <Col>
              <a href="https://www.facebook.com/weph.co/">
              <i className='bi bi-facebook text-dark' />
              </a>
              </Col>
              <Col>
              <a href="https://www.instagram.com/wephco/">
              <i className='bi bi-instagram text-dark' />
              </a>
              </Col>
              <Col>
              {/* <i className='bi bi-youtube' /> */}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer;
