import { useAddProperty } from '../../../hooks/useAddProperty';
import { useState } from 'react';
import property from '../../../assets/property2.jpg';
import { property_locations, property_types } from '../../../utils/constants';
// import styles from '../../style';

const Hero = () => {
	const [buttonNumber, setButtonNumber] = useState(1);

	const activeButton = 'opacity-50 bg-black border-none text-neutral-content hover:bg-black';

	const { addProperty } = useAddProperty();

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		addProperty({
			name: (e.currentTarget.elements.namedItem('name') as HTMLInputElement)?.value || '',
			email: (e.currentTarget.elements.namedItem('email') as HTMLInputElement)?.value || '',
			location: (e.currentTarget.elements.namedItem('location') as HTMLInputElement)?.value || '',
			propertyType:
				(e.currentTarget.elements.namedItem('propertyType') as HTMLInputElement)?.value || '',
			budget: parseInt(
				(e.currentTarget.elements.namedItem('budget') as HTMLInputElement)?.value || '0',
				10,
			),
			serviceType:
				(e.currentTarget.elements.namedItem('serviceType') as HTMLInputElement)?.value || '',
		});
	};

	return (
		<div>
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
								For Sale
							</button>
						</div>
						<div className='flex justify-center bg-black bg-opacity-50 rounded-3xl p-4'>
							<form onSubmit={onSubmit}>
								<fieldset>
									<div className='flex flex-col lg:flex-row gap-2 flex-wrap mb-3'>
										<input
											className='input input-bordered rounded-full text-black'
											placeholder='Name'
											type='text'
											name='name'
											required
										/>
										<input
											className='input input-bordered rounded-full text-black'
											placeholder='Email'
											type='email'
											name='email'
											required
										/>
										<select
											className='select select-bordered rounded-full text-black'
											placeholder='Location'
											name='location'
											required
										>
											<option value='-'>Location</option>
											{property_locations.map((location) => (
												<option className='text-black' key={location.value} value={location.value}>
													{location.label}
												</option>
											))}
										</select>
										{/* <input
											className='input input-bordered rounded-full text-black'
											placeholder='Budget'
											type='number'
										/> */}
									</div>
									<div className='flex flex-col lg:flex-row gap-2 flex-wrap mt-3'>
										<select
											className='select select-bordered rounded-full text-black'
											placeholder='Property Type'
											required
											name='propertyType'
										>
											<option value='-'>Property Type</option>
											{property_types.map((property) => (
												<option className='text-black' key={property.value} value={property.value}>
													{property.label}
												</option>
											))}
										</select>
										{/* <input
											type='number'
											className='input input-bordered rounded-full text-black'
											placeholder='Beds'
										/> */}
										<input
											className='input input-bordered rounded-full text-black'
											placeholder='Budget'
											type='number'
											name='budget'
										/>
										<select
											className='select select-bordered rounded-full text-black'
											placeholder='Service Type'
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
