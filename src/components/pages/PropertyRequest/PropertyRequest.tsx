import { useState, useContext } from 'react';
import styles from '../../style';
import property1 from '../../../assets/property1.svg';
import { property_locations, titles } from '../../../utils/constants';
import ApiHelper from '../../../utils/apiHelper';
import { AppContext, AppContextType } from '../../../context/AppContext';
import { endpoints } from '../../../utils/URL';
import Loader from '../../common/Loader';
import { BsFillInfoCircleFill } from 'react-icons/bs';

const PropertyRequest = () => {
	const { token, setToastContent, setToastOpen } = useContext(AppContext) as AppContextType;

	const [title, setTitle] = useState('');
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [requestType, setRequestType] = useState('');
	const [location, setLocation] = useState('');
	const [propertyType, setPropertyType] = useState('');
	const [budget, setBudget] = useState('');
	const [loading, setLoading] = useState(false);
	const [preferredService, setPreferredService] = useState('');

	const api = new ApiHelper();

	const clearForm = () => {
		setTitle('');
		setName('');
		setEmail('');
		setPhone('');
		setRequestType('');
		setLocation('');
		setPropertyType('');
		setBudget('');
		setPreferredService('');
	};

	const submitRequest = async (e: any) => {
		e.preventDefault();

		setLoading(true);

		const payload = {
			name,
			email,
			phoneNumber: phone,
			location,
			preferredService,
			propertyType,
			requestType,
			budget,
			isPaid: false,
		};

		try {
			await api.postData(endpoints.PropertyRequests.mainUrl, payload, token);
			setToastContent(`Request sent successfully.`);
			setToastOpen(true);
			clearForm();
		} catch (error) {
			setToastContent('Error submitting request. Please try again.');
			setToastOpen(true);
		} finally {
			setLoading(false);
		}
	};

	return (
		<section className='flex md:flex-row flex-col'>
			<div className={`flex-1 hidden md:flex ${styles.flexCenter} md:my-0 my-10 relative`}>
				<img src={property1} alt='Property' className='w-[100%] h-[100%] relative z-[5]' />
			</div>
			<div className={`flex-1 flex-col xl:px-0 sm:px-16 px-6`}>
				<div className='flex flex-row justify-between items-center w-full'>
					<h1 className='flex-1 font-poppins font-semibold text-5xl text-black'>
						Property{' '}
						<span className='text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-black'>
							Request
						</span>{' '}
					</h1>
				</div>

				<div>
					<form>
						<fieldset disabled={loading}>
							<div className='form-control mt-3'>
								<label className='label font-bold'>Title</label>
								<select
									value={title}
									onChange={(e) => setTitle(e.target.value)}
									className='select select-bordered'
								>
									<option className='font-poppins font-semibold uppercase' value='-'>
										-
									</option>
									{titles.map((title) => (
										<option
											className='font-poppins font-semibold uppercase'
											key={title.value}
											value={title.value}
										>
											{title.label}
										</option>
									))}
								</select>
							</div>
							<div className='form-control mt-3'>
								<label className='label font-bold'>Name</label>
								<input
									value={name}
									onChange={(e) => setName(e.target.value)}
									type='text'
									className='input input-bordered'
								/>
							</div>
							<div className='form-control mt-3'>
								<label className='label font-bold'>Email</label>
								<input
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									type='email'
									className='input input-bordered'
								/>
							</div>
							<div className='form-control mt-3'>
								<label className='label font-bold'>Phone Number</label>
								<input
									value={phone}
									onChange={(e) => setPhone(e.target.value)}
									type='tel'
									className='input input-bordered'
								/>
							</div>
							<div className='form-control mt-3'>
								<label className='label font-bold'>Request Type</label>
								<select
									value={requestType}
									onChange={(e) => setRequestType(e.target.value)}
									className='select select-bordered'
								>
									<option className='font-poppins font-semibold uppercase' value='-'>
										-
									</option>
									<option className='font-poppins font-semibold uppercase' value='Rent'>
										Rent
									</option>
									<option className='font-poppins font-semibold uppercase' value='Buy'>
										Buy
									</option>
									<option className='font-poppins font-semibold uppercase' value='Sell'>
										Sell
									</option>
								</select>
							</div>
							<div className='form-control mt-3'>
								<label className='label font-bold'>Location</label>
								<select
									value={location}
									onChange={(e) => setLocation(e.target.value)}
									className='select select-bordered'
								>
									<option className='font-poppins font-semibold uppercase' value='-'>
										-
									</option>
									{property_locations.map((location) => (
										<option
											className='font-poppins font-semibold uppercase'
											key={location.value}
											value={location.value}
										>
											{location.label}
										</option>
									))}
								</select>
							</div>
							<div className='form-control mt-3'>
								<label className='label font-bold'>Property Type</label>
								<select
									value={propertyType}
									onChange={(e) => setPropertyType(e.target.value)}
									className='select select-bordered'
								>
									<option className='font-poppins font-semibold uppercase' value='-'>
										-
									</option>
									<option className='font-poppins font-semibold uppercase' value='Residential'>
										Residential
									</option>
									<option className='font-poppins font-semibold uppercase' value='Commercial'>
										Commercial
									</option>
									<option className='font-poppins font-semibold uppercase' value='Land'>
										Land
									</option>
									<option className='font-poppins font-semibold uppercase' value='Construction'>
										Construction
									</option>
								</select>
							</div>
							<div className='form-control mt-3'>
								<label className='label font-bold'>Budget (NGN)</label>
								<input
									value={budget}
									onChange={(e) => setBudget(e.target.value)}
									type='number'
									className='input input-bordered'
								/>
							</div>
							<div className='form-control w-full'>
								<label className='label font-bold'>
									<span className='label-text'>Preferred Service</span>
								</label>
								<div className='form-control'>
									<label className='label cursor-pointer'>
										<span className='label-text'>
											Connect me to an Agent{' '}
											<span
												className='tooltip tooltip-right'
												data-tip='Get connected to an agent immediately for a one-off fee of ₦5,000'
											>
												<BsFillInfoCircleFill />
											</span>
										</span>
										<input
											onClick={() => setPreferredService('Agent')}
											type='radio'
											name='contact-method'
											className='radio checked:bg-red-500'
										/>
									</label>
								</div>
								<div className='form-control'>
									<label className='label cursor-pointer'>
										<span className='label-text'>
											Use Wephco Services{' '}
											<span
												className='tooltip tooltip-right'
												data-tip='Use Wephco Agents for a one-off 5% service fee'
											>
												<BsFillInfoCircleFill />
											</span>
										</span>
										<input
											onClick={() => setPreferredService('Wephco')}
											type='radio'
											name='contact-method'
											className='radio checked:bg-blue-500'
										/>
									</label>
								</div>
							</div>
							<div className='form-control'>
								<button
									type='button'
									onClick={submitRequest}
									className='btn btn-warning btn-block my-2'
								>
									{loading ? <Loader /> : 'SUBMIT'}
								</button>
							</div>
						</fieldset>
					</form>
				</div>
			</div>
		</section>
	);
};

export { PropertyRequest };
