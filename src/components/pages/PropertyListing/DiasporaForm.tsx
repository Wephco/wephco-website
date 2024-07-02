import { useState } from 'react';
import { addDocument } from '../../../utils/firebaseFunctions';
import Loader from '../../common/Loader';
import Modal from '../../common/Modal';

const DiasporaForm = ({ open, close }: { open: boolean; close: any }) => {
	const [loading, setLoading] = useState(false);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [showNotification, setShowNotification] = useState(false); // Track notification state
	const [notificationMessage, setNotificationMessage] = useState('');

	const clearForm = () => {
		setName('');
		setEmail('');
		setPhone('');
	};

	const submitForm = async () => {
		if (name === '' || email === '' || phone === '') {
			setNotificationMessage('Please fill all the fields');
			setShowNotification(true);
			return;
		}

		setLoading(true);

		const payload = {
			name,
			email,
			phone,
		};

		try {
			await addDocument('diaspora-property-enquiry', payload);
			alert('Request sent successfully');
			clearForm();
			close();
		} catch (error) {
			setShowNotification(true);
			setNotificationMessage('There was a problem submitting your request. Please try again later');
		} finally {
			setLoading(false);
		}
	};

	// if (!open) {
	// 	return null;
	// }

	return (
		<div className='bg-white rounded-lg p-8'>
			{showNotification ? (
				<div
					className='toast toast-top toast-end cursor-pointer z-50'
					onClick={() => setShowNotification(false)}
				>
					<div className={`alert alert-error`}>
						<span className='text-white'>{notificationMessage}</span>
					</div>
				</div>
			) : (
				<div></div>
			)}
			{/* <h1 className='text-2xl font-bold mb-4'>Diaspora</h1> */}
			<Modal open={open} onClose={close}>
				<form>
					<fieldset disabled={loading}>
						<div className='mb-4'>
							<label htmlFor='name' className='block mb-2'>
								Name
							</label>
							<input
								type='text'
								value={name}
								onChange={(e) => setName(e.target.value)}
								id='name'
								className='w-full rounded border border-gray-300 p-2'
								placeholder='Enter your name'
								required
							/>
						</div>
						<div className='mb-4'>
							<label htmlFor='email' className='block mb-2'>
								Email
							</label>
							<input
								type='email'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								id='email'
								className='w-full rounded border border-gray-300 p-2'
								placeholder='Enter your email'
								required
							/>
						</div>
						<div className='mb-4'>
							<label htmlFor='phone' className='block mb-2'>
								Phone
							</label>
							<input
								type='text'
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
								id='phone'
								className='w-full rounded border border-gray-300 p-2'
								placeholder='Enter your phone number'
								required
							/>
						</div>
						<button onClick={submitForm} className='btn btn-success'>
							{loading ? <Loader /> : 'Send'}
						</button>
					</fieldset>
				</form>
			</Modal>
		</div>
	);
};

export default DiasporaForm;
