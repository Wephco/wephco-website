import React from 'react';
import styles from '../../style';
import GetStarted from '../../common/GetStartedButton';
import property from '../../../assets/property.png';
import { property_locations } from '../../../utils/constants';

const Hero = () => {
	return (
		<section id='home' className={`relative h-screen ${styles.paddingY}`}>
			<div className='absolute inset-0'>
				<img src={property} alt='Property' className='w-full h-full object-cover' />
				<div className='absolute inset-0 bg-black opacity-50'></div>
			</div>

			<div
				className={`absolute inset-0 flex flex-row ${styles.flexStart} ${styles.flexCenter} px-6 text-white`}
			>
				<div className='flex flex-col items-center text-center pr-6'>
					<div className='mb-4'>
						<h1 className='font-poppins font-semibold text-4xl sm:text-6xl text-white'>
							Tech <br className='sm:block hidden' />{' '}
							<span className='text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-black'>
								Meets
							</span>{' '}
						</h1>
					</div>

					<h1 className='font-poppins font-semibold text-4xl sm:text-6xl mb-4 text-white'>
						Real Estate.
					</h1>

					<p className={`${styles.paragraph} max-w-[470px] mb-8 text-lg text-white`}>
						Get all your real estate needs through technology. We have taken the stress in real
						estate away from you, the customer.
					</p>
				</div>

				<form className={`${styles.paragraph} max-w-[470px] ml-auto`}>
					<div className='mb-4'>
						<label htmlFor='name' className='text-white'>
							Name:
						</label>
						<input
							type='text'
							id='name'
							name='name'
							className='w-full px-3 py-2 border rounded-md text-black'
						/>
					</div>

					<div className='mb-4'>
						<label htmlFor='email' className='text-white'>
							Email:
						</label>
						<input
							type='email'
							id='email'
							name='email'
							className='w-full px-3 py-2 border rounded-md text-black'
						/>
					</div>

					<div className='mb-4'>
						<label htmlFor='location' className='text-white'>
							Location:
						</label>
						<select
							id='location'
							name='location'
							className='w-full px-3 py-2 border rounded-md text-black'
						>
							{property_locations.map((location) => (
								<option key={location.value} value={location.value}>
									{location.label}
								</option>
							))}
						</select>
					</div>

					<div className='mb-4'>
						<label htmlFor='propertyType' className='text-white'>
							Property Type:
						</label>
						<select
							id='propertyType'
							name='propertyType'
							className='w-full px-3 py-2 border rounded-md text-black'
						>
							<option value='residential'>Residential</option>
							<option value='commercial'>Commercial</option>
						</select>
					</div>

					<button
						type='submit'
						className='bg-red-700 text-white px-4 py-2 rounded-md hover:bg-red-800 transition duration-300'
					>
						Submit
					</button>
				</form>
			</div>

			<div className={`ss:hidden ${styles.flexCenter}`}>
				<GetStarted />
			</div>
		</section>
	);
};

export default Hero;
