import { useState, useContext } from 'react';
import { endpoints } from '../../../utils/URL';
import styles from '../../style';
import ApiHelper from '../../../utils/apiHelper';
import { AppContext, AppContextType } from '../../../context/AppContext';

const ConsultUs = () => {
	const { token, setToastContent, setToastOpen } = useContext(AppContext) as AppContextType;

	const [fullName, setFullName] = useState('');
	const [email, setEmail] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [contactMethod, setContactMethod] = useState('');
	const [message, setMessage] = useState('');
	const [loading, setLoading] = useState(false);

	const api = new ApiHelper();

	const clearForm = () => {
		setFullName('');
		setEmail('');
		setPhoneNumber('');
		setMessage('');
	};

	const submit = async (e: any) => {
		e.preventDefault();

		if (
			fullName.trim() === '' ||
			email.trim() === '' ||
			phoneNumber.trim() === '' ||
			contactMethod.trim() === '' ||
			message.trim() === ''
		) {
			setToastContent('Please fill all fields');
			setToastOpen(true);
			return;
		}

		setLoading(true);

		const payload = {
			name: fullName,
			location: '',
			phoneNumber,
			email,
			message,
			contactMethod,
		};

		try {
			await api.postData(endpoints.Consultations.mainUrl, payload, token);
			setToastContent(`Message sent successfully.`);
			setToastOpen(true);
			clearForm();
		} catch (error) {
			setToastContent('Error submitting form. Please try again.');
			setToastOpen(true);
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<div className='flex justify-center'>
				<div className='my-5'>
					<h3 className={styles.heading2}>Consult Us</h3>
				</div>
			</div>
			<div className='flex justify-center'>
				<div className='card w-96 shadow-xl rounded-xl p-12 my-5'>
					<form onSubmit={submit}>
						<fieldset disabled={loading}>
							<div className='form-control w-full'>
								<label className='label font-bold'>
									<span className='label-text'>Full Name</span>
								</label>
								<input
									value={fullName}
									onChange={(e) => setFullName(e.target.value)}
									type='text'
									placeholder=''
									className='input input-bordered w-full'
								/>
							</div>
							<div className='form-control w-full'>
								<label className='label font-bold'>
									<span className='label-text'>Email</span>
								</label>
								<input
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									type='email'
									placeholder=''
									className='input input-bordered w-full'
								/>
							</div>
							<div className='form-control w-full'>
								<label className='label font-bold'>
									<span className='label-text'>Phone Number</span>
								</label>
								<input
									value={phoneNumber}
									onChange={(e) => setPhoneNumber(e.target.value)}
									type='text'
									placeholder=''
									className='input input-bordered w-full'
								/>
							</div>
							<div className='form-control w-full'>
								<label className='label font-bold'>
									<span className='label-text'>Preferred Contact Method</span>
								</label>
								<div className='form-control'>
									<label className='label cursor-pointer'>
										<span className='label-text'>Phone Call</span>
										<input
											onClick={() => setContactMethod('phoneCall')}
											type='radio'
											name='contact-method'
											className='radio checked:bg-red-500'
										/>
									</label>
								</div>
								<div className='form-control'>
									<label className='label cursor-pointer'>
										<span className='label-text'>Email</span>
										<input
											onClick={() => setContactMethod('email')}
											type='radio'
											name='contact-method'
											className='radio checked:bg-blue-500'
										/>
									</label>
								</div>
							</div>
							<div className='form-control w-full'>
								<label className='label font-bold'>
									<span className='label-text'>Message</span>
								</label>
								<textarea
									value={message}
									onChange={(e) => setMessage(e.target.value)}
									rows={3}
									className='textarea textarea-bordered w-full'
								></textarea>
							</div>
							<button type='submit' className='btn btn-success btn-block mt-5'>
								SUBMIT
							</button>
						</fieldset>
					</form>
				</div>
			</div>
		</>
	);
};

export default ConsultUs;
