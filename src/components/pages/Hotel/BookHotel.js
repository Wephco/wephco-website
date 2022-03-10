import React from 'react'
import { Card, Form, Row } from 'react-bootstrap'
import ABUJA_HOTELS from '../../../utils/abuja hotels.json'

const BookHotel = () => {
  return (
    <>
        <div className="container">
       <h3 className="text-center" style={{marginTop:'100px'}}>BOOK A HOTEL</h3>
       <div className="row d-flex justify-content-center align-items-center">
         <div className="col-md-8 col-sm-12 mt-5">
             <Card>
                 <Card.Body>
                     <form name='Book A Hotel' method='post' data-netlify='true'>
                         <input type='hidden' name='form-name' value='Book A Hotel'/>
                         <fieldset>

                             <div className='row my-3'>
                                <div className='col-md-6'>
                                    <label className=''>Full Name</label>
                                    <input id='FullName' name='Full Name' className='form-control' required type='text' />
                                </div>
                                <div className='col-md-6'>
                                    <label className=''>Phone Number</label>
                                    <input id='PhoneNumber' name='Phone Number' className='form-control' required type='text' />
                                </div>
                             </div>

                             <div className='row mb-3'>
                                <div className='col-md-6'>
                                    <label className=''>City</label>
                                    <select id='City' name='City' className='form-control' type='text' required >
                                        <option value='-'>-</option>
                                        <option value='Real Estate'>Abuja</option>
                                        <option value='Hospitality'>Lagos</option>
                                    </select>
                                </div>
                                <div className='col-md-6'>
                                    <label className=''>Phone Number</label>
                                    <input id='PhoneNumber' name='Phone Number' className='form-control' required type='text' />
                                </div>
                             </div>

                         </fieldset>
                     </form>
                 </Card.Body>
             </Card>
        </div>
        </div>
        </div>
    </>
  )
}

export default BookHotel;