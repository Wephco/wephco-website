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
              <Link className='text-dark' to='/'>Real Estate</Link>
            </h6>
            <h6 className='mt-3'>
              <Link className='text-dark' to='/'>Logistics</Link>
            </h6>
            <h6 className='mt-3'>
              <Link className='text-dark' to='/'>Hospitality</Link>
            </h6>
            
          </Col>
          <Col xs={12} md={4}>
            <h4 className="mt-5">
              Follow Us
            </h4>
            <Row>
              <Col sm={4} md={2}>
              <a href="https://www.facebook.com/weph.co/">
              <i className='bi bi-facebook text-primary' />
              </a>
              </Col>
              <Col sm={4} md={2}>
              <a href="https://www.instagram.com/wephco/">
              <i className='bi bi-instagram text-dark' />
              </a>
              </Col>
              <Col sm={4} md={2}>
                <a href='https://www.twitter.com/wephco'>
                  <i className='bi bi-twitter' />
                </a>
              </Col>
              <Col sm={4} md={2}>
                <a href='https://www.linkedin.com/company/weph-co/'>
                  <i className="bi bi-linkedin"/>
                </a>
              </Col>
              <Col sm={4} md={2}>
                <a href='https://youtube.com/channel/UC-d7FsZdffJmhYlXCaUixKA'>
                  <i className='bi bi-youtube text-danger' />
                </a>
              </Col>
              {/* <Col sm={4} md={2}>
                <a href='https://vm.tiktok.com/ZMLhg8mPH/'>
                  <i className="bi bi-tiktok"/>
                </a>
              </Col> */}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer;
