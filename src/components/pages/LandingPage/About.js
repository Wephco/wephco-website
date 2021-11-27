import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import mission from '../../../assets/images/mission.svg';
import outdoor from '../../../assets/images/outdoor.jpeg';
import works11 from '../../../assets/images/works11.jpeg'

const About = () => {
  return (
    <div>
    <Container>
      <Row>
        <Col>
        <div className="card mb-3 h-100" style={{maxWidth:'540px'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={works11} className="d-block w-100 rounded-start" alt="House 2"/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title text-danger">ABOUT WEPHCO</h5>
        <p className="card-text">Over the years, Weph.co has evolved and transcend beyond all odds in the Exterior & Interior Decoration industry. We believe in bringing your dreams into reality.</p>
      </div>
    </div>
  </div>
</div>
        </Col>
        <Col>
        <div className="card mb-3 h-100" style={{maxWidth:'540px'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={outdoor} className="d-block w-100 rounded-start" alt="Project 6"/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title text-danger">WHO WE ARE</h5>
        <p className="card-text">Weph.co is poised to make the world a place of choice to live, work, play and grow in style and perfection always.</p>
      </div>
    </div>
  </div>
</div>
        </Col>
      </Row>
    
      <p className="text-center"><strong>A LARGE EFFICIENT INTERIOR DESIGN COMPANY</strong></p>      
          <div className="text-center">
          <img src={mission} alt='Mission Statement' />
        </div> 

        
    </Container>
    {/* <div className="we-do bg-wephco-blue">
        <h5 className="text-center mt-5 text-white display-5">
          WHAT WE DO
        </h5>
        <div className="mt-5">
          <Row>
            <Col>Interior & Exterior Design</Col>
            <Col>Real Estate</Col>
            <Col>WephcoFx</Col>
            <Col>Logistics</Col>
          </Row>
        </div>
    </div> */}
    </div>
  )
}

export default About;
