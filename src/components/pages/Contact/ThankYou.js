import React from 'react'

const ThankYou = () => {
  return (
    <>
      <div className='container'>
            <h3 className="text-center" style={{marginTop:'80px'}}>CONTACT US</h3>
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-6 col-sm-6 mt-5 mb-5">
                    <div class="alert alert-success" role="alert">
                        <h4 class="alert-heading">Well done!</h4>
                        <p>Thank you for reaching out to us.</p>
                        <hr/>
                        <p class="mb-0">We will be in touch shortly.</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ThankYou;