import React, { useState } from 'react'
import { db } from '../../../utils/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { useToasts } from 'react-toast-notifications'

const Newsletter = () => {

  const [loading, setLoading] = useState(false)
  const [subscriberEmail, setSubscriberEmail] = useState('')

  const { addToast } = useToasts()

  const handleChange = (event) => {
    setSubscriberEmail(event.target.value)
  }

  const subscribe = async (event) => {
    event.preventDefault();

    setLoading(true);

    try {
      await addDoc(collection(db, 'NewsletterSubscribers'), {
              email: subscriberEmail
            });
      setSubscriberEmail('');
      addToast('Subscription successful',{ appearance:'success' });
    } catch (error) {
      addToast('Subscription unsuccessful',{ appearance:'error' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <div className="newsletter">
        <div className="bg-danger p-3">
          <div className="mt-4">
            <div className=''>
              <h2 className='text-center text-white'>Subscribe to Our Newsletter</h2>
              <div className="text-center">
              <form>
                <fieldset disabled={loading}>
                <div className="row d-flex justify-content-center align-items-center">
                  <div className="col-auto">
                    <input value={subscriberEmail} onChange={handleChange} placeholder='Email' className='form-control' type='email' name='email' required />
                  </div>
                  <div className="col-auto">
                    <button onClick={subscribe} type='submit' className='btn btn-block btn-dark'>Subscribe</button>
                  </div>
                </div>
                </fieldset>
              </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newsletter;
