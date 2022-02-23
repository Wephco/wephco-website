import React from 'react'
import { Row, Col } from 'react-bootstrap'

const Contact = () => {
  return (
    <div>
        <div className='container'>
            <h3 className="text-center" style={{marginTop:'80px'}}>CONTACT US</h3>
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-8 col-sm-6 mt-5">
                <Row >
          <Col md={6}>
            <Row>
              <Col md={2}>
                <i className="bi bi-geo-alt-fill"></i>
              </Col>
              <Col md={10}>
                <h5>Our Location</h5>
                <p>
                  Suite D-93, Efab Mall Extension. Area 11, Garki
                </p>
              </Col>
            </Row>
            <Row>
              <Col md={2}>
                <i className="bi bi-whatsapp"></i>
              </Col>
              <Col md={10}>
                <h5>Let's Talk</h5>
                <p>+234 814 407 6079</p>
              </Col>
            </Row>
            <Row>
              <Col md={2}>
                <i className="bi bi-envelope"></i>
              </Col>
              <Col md={10}>
                <h5>Email Us</h5>
                <p>support@wephco.com</p>
              </Col>
            </Row>
          </Col>
          <Col md={6} className=''>
            <form name='contact' method='post' data-netlify='true'>
              <input type='hidden' name='form-name' value='contact'/>
              
              <fieldset>

              <div className='row my-3'>
                <div className='col-md-6'>
                  <label className=''>Name</label>
                  <input id='Name' name='Name' className='form-control' required type='text' />
                </div>

                <div className='col-md-6'>
                <label className=''>Email</label>
                  <input id='Email' name='Email' className='form-control' required type='email' />
                </div>
              </div>

              <div className='row my-3'>
              <div className='col-md-6'>
                  <label className=''>Phone</label>
                  <input id='Phone' name='Phone' className='form-control' required type='text' />
                </div>

                <div className='col-md-6'>
                <label className=''>Service</label>
                  <select id='Services' name='Services' className='form-control' type='text' required >
                      <option value='-'>-</option>
                      <option value='Real Estate'>Real Estate</option>
                      <option value='Hospitality'>Hospitality</option>
                      <option value='Logistics'>Logictics</option>
                      <option value='Others'>Others</option>
                    </select>
                </div>
              </div>

              <div className='col-md-6 my-3'>
                  <label className=''>Message</label>
                  <textarea id='Message' name='Message' className='form-control' required type='text'></textarea>
                </div>

              <button type='submit' className='btn btn-danger mt-3'>
                Send Message
              </button>
              </fieldset>
            </form>
          </Col>
        </Row>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact