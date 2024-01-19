// Import necessary dependencies and styles
import { useSpring, animated } from 'react-spring';
import styles from '../../style';
import property from '../../../assets/property.png';
import { property_locations } from '../../../utils/constants';

// Define the Hero component
const Hero = () => {
	// Define animation properties
	const fadeIn = useSpring({
		opacity: 1,
		from: { opacity: 0 },
		config: { duration: 2000 },
	});

	const slideInFromLeft = useSpring({
		marginLeft: 0,
		from: { marginLeft: -100 },
		config: { duration: 1500 },
	});

	// Render the component
	return (
		<div>
			{/* Hero Section */}
			<section
				id='home'
				className={`relative h-screen ${styles.flexCenter} ${styles.paddingY} md:paddingY-24 lg:paddingY-32`}
				style={{ marginBottom: '4rem' }}
			>
				{/* Background Image with Overlay */}
				<div className='absolute inset-0'>
					<img
						src={property}
						alt='Property'
						className='w-full h-full object-cover rounded-b-2xl'
						style={{
							borderTopLeftRadius: '20px',
							borderTopRightRadius: '20px',
							borderBottomLeftRadius: '20px',
							borderBottomRightRadius: '20px',
						}}
					/>
					<div
						className='absolute inset-0 bg-black opacity-50 rounded-b-2xl'
						style={{
							borderTopLeftRadius: '20px',
							borderTopRightRadius: '20px',
							borderBottomLeftRadius: '20px',
							borderBottomRightRadius: '20px',
						}}
					></div>
				</div>

				{/* Content Container */}
				<div className='absolute inset-0 flex flex-col items-center justify-center text-center text-white'>
					{/* Left Content */}
					<animated.div style={fadeIn} className='mb-8'>
						<div className='mb-4'>
							<animated.h1
								style={{ ...fadeIn, margin: '-2rem 0 0 0' }}
								className='sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-25 font-sans mb-2'
							>
								Unlocking your dream home, <span className='text-white'>together.</span>
							</animated.h1>
						</div>
						<p
							className={`${styles.paragraph} sm:text-base md:text-lg lg:text-xl mb-2`}
							style={{ letterSpacing: '2px', marginTop: '-1rem' }}
						>
							UNITED ARAB EMIRATES | NIGERIA
						</p>
					</animated.div>

					{/* Buttons */}
					<div className='flex flex-wrap gap-2 mb-4'>
						<button className='btn btn-xs sm:btn-sm md:btn-md lg:btn-lg opacity-50 rounded-full bg-black text-white border-none font-normal'>
							All
						</button>
						<button className='btn btn-xs sm:btn-sm md:btn-md lg:btn-lg rounded-full bg-red-400 text-white border-none font-normal'>
							For Rent
						</button>
						<button className='btn btn-xs sm:btn-sm md:btn-md lg:btn-lg rounded-full bg-red-400 text-white border-none font-normal'>
							For Sale
						</button>
					</div>

					{/* Form Section with Submit Button */}
					<div className='center-form'>
						<animated.form
							style={{
								...fadeIn,
								...slideInFromLeft,
								backgroundColor: 'rgba(0, 0, 0, 0.5)',
								borderRadius: '10px',
								padding: '20px',
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
							}}
							className={`${styles.paragraph} max-w-[470px] mt-4 mx-auto`}
						>
							{/* Name and Email Fields on the same line */}
							<div className='mb-4 flex flex-col gap-4 w-full md:flex-row md:items-center'>
								<div className='flex flex-wrap gap-4 w-full md:flex-grow'>
									<input
										type='text'
										id='name'
										name='name'
										placeholder='Name'
										className='w-full px-3 py-2 border rounded-full text-black bg-white mb-2'
									/>
								</div>
								<div className='flex flex-wrap gap-4 w-full md:flex-grow'>
									<input
										type='email'
										id='email'
										name='email'
										placeholder='Email'
										className='w-full px-3 py-2 border rounded-full text-black bg-white mb-2'
									/>
								</div>
							</div>

							{/* Location and Property Type Fields on the same line */}
							<div className='mb-4 flex flex-col gap-4 w-full md:flex-row md:items-center'>
								<div className='flex flex-wrap gap-4 w-full md:flex-grow'>
									<select
										id='location'
										name='location'
										placeholder='Location'
										className='w-full px-3 py-2 border rounded-full text-black bg-white mb-2'
									>
										<option value=''>Location</option>
										{property_locations.map((location) => (
											<option key={location.value} value={location.value}>
												{location.label}
											</option>
										))}
									</select>
								</div>
								<div className='flex flex-wrap gap-4 w-full md:flex-grow'>
									<select
										id='propertyType'
										name='propertyType'
										placeholder='Property Type'
										className='w-full px-3 py-2 border rounded-full text-black bg-white mb-2'
									>
										<option value=''>Property Type</option>
										<option value='residential'>Residential</option>
										<option value='commercial'>Commercial</option>
									</select>
								</div>
							</div>

							{/* Submit Button */}
							<button
								type='submit'
								className='bg-red-700 text-white px-4 py-2 rounded-full hover:bg-red-800 transition duration-300'
							>
								Submit
							</button>
						</animated.form>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Hero;
