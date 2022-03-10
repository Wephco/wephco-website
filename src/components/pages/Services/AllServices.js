import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faHotel, faLocationArrow, faPlane, faPlus } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <div className='container'>
        <div className='header-image mt-5'>
            <img src='https://www.gstatic.com/travel-frontend/animation/hero/trips_4.svg' alt='travel hero' />
        </div>
        <div className='title text-center'>
            <h1 className=''>Travel</h1>
        </div>
        {/* Search box */}
        <div className='searchbox text-center mt-3' style={{width:'350px'}}>
            <div className='card text-center' style={{borderRadius:'35px', height:'60px'}}>
                <div className='card-body text-center'>
                    <Row>
                        <Col xs={1} md={2}>
                            <i className='bi bi-search' style={{fontSize:'25px'}} />
                            {/* <FontAwesomeIcon icon={faSearch} size='2x' /> */}
                        </Col>
                        <Col xs={11} md={10}>
                            <input className='form-control' style={{border:'none', outline:'none'}} placeholder='Search for flights, hotels and more' />
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
        
       
    </div>
  );
};

export default Home;
