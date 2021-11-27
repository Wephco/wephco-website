import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import Alert from 'react-bootstrap/Alert';
// import { db } from '../../utils/firebaseConfig';
// import { collection, addDoc } from 'firebase/firestore'

const ContactUsModal = ({open, close}) => {

  const [localState, setLocalState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Real Estate',
    message: ''
  })

  // const handleChange = (input) => (event) => {
  //   setLocalState({
  //     ...localState,
  //     [input]: event.target.value
  //   })
  // }

  const clearForm = () => {
    setLocalState({
    ...localState,
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
    });
  }

  // const submitContactForm = async (event) => {
  //   event.preventDefault();

  //   try {
  //     await addDoc(collection(db, 'websiteContact'), {
  //       name: localState.name,
  //       email: localState.email,
  //       phone: localState.phone,
  //       subject: localState.subject,
  //       message: localState.message
  //     });
  //     // alert('Message sent successfully. We will contact you shortly.');
  //     <Alert dismissible variant='success'>Message sent successfully. We will contact you shortly.</Alert>
  //     clearForm()
  //     close()
  //   } catch (error) {
  //     // alert('Error sending message. Try again.')
  //     <Alert dismissible variant='error'>Error sending message. Try again.</Alert>
  //   }
  // }

  return (
    <Modal size='lg' show={open} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>Consult Us</Modal.Title>
      </Modal.Header>
      <Modal.Body className='bg-wephco-blue'>
        <Row >
          <Col md={6}>
            <Row>
              <Col md={2}>
                <i className="bi bi-geo-alt-fill"></i>
              </Col>
              <Col md={10}>
                <h5>Our Location</h5>
                <p>
                  No B10, Valley Mall Plaza, Wuse 2, Abuja.
                </p>
              </Col>
            </Row>
            <Row>
              <Col md={2}>
                <i className="bi bi-whatsapp"></i>
              </Col>
              <Col md={10}>
                <h5>Let's Talk</h5>
                <p>+1 214 650 3751</p>
              </Col>
            </Row>
            <Row>
              <Col md={2}>
                <i className="bi bi-envelope"></i>
              </Col>
              <Col md={10}>
                <h5>Email Us</h5>
                <p>info@wephco.com</p>
              </Col>
            </Row>
          </Col>
          <Col md={6} className=''>
            <form name='contact' method='post' data-netlify='true'>
              <input type='hidden' name='form-name' value='contact'/>
              
              <fieldset>

              <div className='row'>
                <div className='col-md-6'>
                  <label className='text-white'>Name</label>
                  <input id='Name' name='Name' required type='text' />
                </div>

                <div className='col-md-6'>
                <label className='text-white'>Email</label>
                  <input id='Email' name='Email' required type='email' />
                </div>
              </div>

              <div className='row'>
              <div className='col-md-6'>
                  <label className='text-white'>Phone</label>
                  <input id='Phone' name='Phone' required type='text' />
                </div>

                <div className='col-md-6'>
                <label className='text-white'>Service</label>
                  <input id='Services' name='Services' type='text' required />
                </div>
              </div>

              <div className='col-md-12'>
                  <label className='text-white'>Message</label>
                  <textarea id='Message' name='Message' required type='text'></textarea>
                </div>

              <button type='submit' className='btn btn-light mt-3'>
                Send Message
              </button>
              </fieldset>
            </form>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  )
}

export default ContactUsModal;
