import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import house from '../../../assets/images/house.jpeg';

const RealEstate = () => {

  return (
    <>
    <!--Start of Tawk.to Script-->
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/619cc6b36885f60a50bd1ea2/1fl66gdlj';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>
<!--End of Tawk.to Script-->
      <div className="bg-wephco-blue header">
        <Container>
        <div className="p-5">
          <img src={house} alt='Real Estate' className='d-block w-100' height={500} />
          <div className="text-center mt-5 text-wrap text-uppercase fst-italic fw-bold fs-5">
            Your home should tell the story of who you are and be a collection of what you love.
          </div>
        </div>
        </Container>
      </div>

      <div className="bg-light services">
        <div className="p-5 mt-3">
          <Container>
          <Row>
            <Col xs={12} md={4}>
            <div className="display-6 text-center">
            <i className="bi bi-gear-wide-connected text-warning"></i>
            </div>
            <h5 className="text-center text-wrap">Construction and Project Management</h5>
            </Col>
            <Col xs={12} md={4}>
            <div className="display-6 text-center">
            <i className="bi bi-truck text-warning"></i>
            </div>
            <h5 className="text-center text-wrap">Transportation and Construction Shipment</h5>
            </Col>
            <Col xs={12} md={4}>
            <div className="display-6 text-center">
            <i className="bi bi-house-fill text-warning"></i>
            </div>
            <h5 className="text-center text-wrap">Real Estate Development</h5>
            </Col>
          </Row>
          </Container>
        </div>
      </div>

      <div className="pictures">
        <Container>
          <h6 className="mt-5 text-danger fw-bold text-center">BECOME A MEMBER</h6>
          <h5 className='fw-bold text-center'>GET UP TO 20% DISCOUNT ON PROPERTIES IN NIGERIA</h5>
          <div className="text-center p-5">
              <Link to='/pricing' className='btn btn-block bg-wephco-blue'>
                REGISTER
              </Link>
            </div>
        </Container>
      </div>
    </>
  )
}

export default RealEstate;
