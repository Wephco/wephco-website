// Hero.tsx
import React, { useState } from 'react';
import { useAddProperty } from '../../../hooks/useAddProperty';
import property from '../../../assets/property3.jpg';
import { property_locations, property_types } from '../../../utils/constants';
import FormLoaderNotification from './FormLoaderNotification'; // Import the new component
import { IPropertyRequest } from '../../../interfaces/PropertyRequestInterface';

const initialState: IPropertyRequest = {
	name: '',
	email: '',
	phone: '',
	location: '',
	propertyType: '',
	budget: '',
	serviceType: '',
	attendedTo: false,
	dateOfRequest: new Date().toLocaleString(),
};

const Hero = () => {
	const [buttonNumber, setButtonNumber] = useState(1);
	const [localState, setLocalState] = useState(initialState);
	const [isLoading, setIsLoading] = useState(false); // Track loading state
	const [showNotification, setShowNotification] = useState(false); // Track notification state
	const [notificationMessage, setNotificationMessage] = useState('');
	const [notificationVariant, setNotificationVariant] = useState('');

	const activeButton = 'opacity-50 bg-black border-none text-neutral-content hover:bg-black';
	const { addProperty } = useAddProperty();

	const handleChange = (input: string) => (e: any) => {
		if (input === 'budget') {
			const number = e.target.value.replace(/,/g, '');
			const formattedNumber = Number(number).toLocaleString();
			setLocalState({ ...localState, [input]: formattedNumber });
		} else {
			setLocalState({ ...localState, [input]: e.target.value });
		}
	};

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsLoading(true); // Show loader

		try {
			await addProperty(localState);

			// Clear the form and set it back to its initial state
			setLocalState(initialState);

			// Show notification
			setShowNotification(true);
			setNotificationVariant('success');
			setNotificationMessage(
				'Your request has been submitted. A representative will contact you. Thank You!',
			);
		} catch (error) {
			// console.error('Firebase operation failed:', error);
			// Handle error, show error notification, etc.
			setShowNotification(true);
			setNotificationVariant('error');
			setNotificationMessage('There was a problem submitting your request. Please try again later');
		} finally {
			setIsLoading(false); // Hide loader regardless of success or failure
		}
	};

	let notification = (
		<FormLoaderNotification
			notification={notificationMessage}
			showNotification={showNotification}
			variant={notificationVariant}
			close={() => setShowNotification(false)}
		/>
	);

	return (
		<div>
			{notification}
			<div
				className='hero min-h-screen'
				style={{
					backgroundImage: `url(${property})`,
				}}
			>
				<div className='hero-overlay bg-opacity-50'></div>
				<div className='hero-content text-center text-neutral-content font-poppins'>
					<div className='max-w-4xl'>
						<h1 className='mb-5 text-4xl font-bold'>Unlocking your dream home, together</h1>
						<p className={`font-poppins font-semibold text-white text-[18px] leading-[30.8px]`}>
							UAE | NIGERIA
						</p>
						{/* Buttons */}
						<div className='flex justify-center flex-wrap gap-4 my-4'>
							<button
								onClick={() => setButtonNumber(1)}
								className={`btn rounded-full text-white uppercase ${
									buttonNumber === 1
										? activeButton
										: 'bg-red-400 border-red-400 hover:bg-red-500 hover:border-red-500'
								}`}
							>
								All
							</button>
							<button
								onClick={() => setButtonNumber(2)}
								className={`btn rounded-full text-white uppercase ${
									buttonNumber === 2
										? activeButton
										: 'bg-red-400 border-red-400 hover:bg-red-500 hover:border-red-500'
								}`}
							>
								For Rent
							</button>
							<button
								onClick={() => setButtonNumber(3)}
								className={`btn rounded-full text-white uppercase ${
									buttonNumber === 3
										? activeButton
										: 'bg-red-400 border-red-400 hover:bg-red-500 hover:border-red-500'
								}`}
							>
								Buy
							</button>
						</div>
						{isLoading ? (
							<span className='loading loading-infinity loading-lg text-white'></span>
						) : (
							<div></div>
						)}
						<div className='flex justify-center bg-black bg-opacity-50 rounded-3xl p-4'>
							<form onSubmit={onSubmit}>
								<fieldset disabled={isLoading}>
									<div className='flex flex-col lg:flex-row gap-2 mb-3'>
										<input
											className='input input-bordered rounded-full text-black'
											placeholder='Name'
											type='text'
											value={localState.name}
											onChange={handleChange('name')}
											required
										/>
										<input
											className='input input-bordered rounded-full text-black'
											placeholder='Email'
											type='email'
											value={localState.email}
											onChange={handleChange('email')}
											required
										/>
										<input 
											className='input input-bordered rounded-full text-black'
											placeholder='09012345678'
											type='tel'
											value={localState.phone}
											onChange={handleChange('phone')}
											required
											pattern='[0-9]11'
										/>
										<select
											className='select select-bordered rounded-full text-black'
											placeholder='Location'
											value={localState.location}
											onChange={handleChange('location')}
											required
										>
											<option value='-'>Location</option>
											{property_locations.map((location) => (
												<option className='text-black' key={location.value} value={location.value}>
													{location.label}
												</option>
											))}
										</select>
									</div>
									<div className='flex flex-col lg:flex-row gap-2 mt-3'>
										<select
											className='select select-bordered rounded-full text-black'
											placeholder='Property Type'
											required
											value={localState.propertyType}
											onChange={handleChange('propertyType')}
										>
											<option value='-'>Property Type</option>
											{property_types.map((property) => (
												<option className='text-black' key={property.value} value={property.value}>
													{property.label}
												</option>
											))}
										</select>
										<input
											className='input input-bordered rounded-full text-black'
											placeholder='Budget'
											type='text'
											value={localState.budget}
											onChange={handleChange('budget')}
											required
										/>
										<select
											className='select select-bordered rounded-full text-black'
											placeholder='Service Type'
											value={localState.serviceType}
											onChange={handleChange('serviceType')}
											required
										>
											<option value='-'>Service Type</option>
											<option value='Agent'>Link me to Agent</option>
											<option value='Wephco'>Wephco Insured</option>
											<option value='Consultation'>Consultation</option>
										</select>
										<button className='btn btn-success text-white rounded-full'>
											Submit Enquiry
										</button>
									</div>
								</fieldset>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export { Hero };
