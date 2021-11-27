import React from 'react'
import { Row, Col, Container, Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import realestate from '../../../assets/images/realestate.jpeg'
import logistics from '../../../assets/images/logistics-3125131_1920.jpg'
import wephfx from '../../../assets/images/exchange.jpeg'
import works1 from '../../../assets/images/works1.jpeg'


const Services = () => {
  return (
    <div className='p-5 bg-wephco-blue'>
      <Container>
        <div className="header">
          <div className="mt-5">
            <div className="text-center">
              <h6 className="text-danger">SERVICES</h6>
              <h5>COVERED INDUSTRIES</h5>
            </div>
          </div>
        </div>
        <div className="service-cards">
          <div className="mt-5">
            <Row>
              <Col>
                <Link to='/'>
                <Card className='h-100'>
                  <Card.Img variant='bottom' className='d-block w-100' src={works1} alt='Interior & Exterior' />
                  <Card.Footer>
                    <h6 className='wephco-blue'>Interior</h6>
                  </Card.Footer>
                </Card>
                </Link>
              </Col>

              <Col>
              <Link to='/real-estate'>
              <Card className='h-100'>
                  <Card.Img variant='bottom' className='d-block w-100' src={realestate} alt='Real Estate' />
                  <Card.Footer>
                    <h6 className='wephco-blue'>Housing</h6>
                  </Card.Footer>
                </Card>
              </Link>
              </Col>

              <Col>
              <Link to='/logistics'>
              <Card className='h-100'>
                  <Card.Img variant='top' className='d-block h-100 w-100' src={logistics} alt='' />
                  <Card.Footer>
                    <h6 className='wephco-blue'>Logistics</h6>
                  </Card.Footer>
                </Card>
              </Link>
              </Col>

              <Col>
              <a href='https://fx.wephco.com' target="_blank" rel='noreferrer'>
              <Card className='h-100'>
                  <Card.Img variant='top' className='d-block h-100 w-100' src={wephfx} alt='' />
                  <Card.Footer>
                    <h6 className='wephco-blue'>WephcoFx</h6>
                  </Card.Footer>
                </Card>
              </a>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Services;
