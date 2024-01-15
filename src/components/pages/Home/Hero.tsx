import { useSpring, animated } from 'react-spring';
import styles from '../../style';
import GetStarted from '../../common/GetStartedButton';
import property from '../../../assets/property.png';
import { property_locations } from '../../../utils/constants';

const Hero = () => {
	const fadeIn = useSpring({
		opacity: 1,
		from: { opacity: 0 },
		config: { duration: 2000 }, // Adjusted duration for fade-in
	});

	const slideInFromLeft = useSpring({
		marginLeft: 0,
		from: { marginLeft: -100 },
		config: { duration: 1500 }, // Adjusted duration for slide-in
	});

	return (
		<section id='home' className={`relative h-screen ${styles.paddingY}`}>
			{/* Background Image with Overlay */}
			<div className='absolute inset-0'>
				<img src={property} alt='Property' className='w-full h-full object-cover' />
				<div className='absolute inset-0 bg-black opacity-50'></div>
			</div>

			{/* Content Container */}
			<div className={`absolute inset-0 flex ${styles.flexCenter}`}>
				{/* Left Content */}
				<animated.div style={fadeIn} className='text-center'>
					<div className='mb-4'>
						<animated.h1
							style={fadeIn}
							className='font-poppins font-semibold text-4xl sm:text-6xl text-white'
						>
							Tech <br className='sm:block hidden' />{' '}
							<span className='text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-black'>
								Meets
							</span>{' '}
						</animated.h1>
					</div>

					<animated.h1
						style={fadeIn}
						className='font-poppins font-semibold text-4xl sm:text-6xl mb-4 text-white'
					>
						Real Estate.
					</animated.h1>

					<animated.p
						style={fadeIn}
						className={`${styles.paragraph} max-w-[470px] mb-8 text-lg text-white`}
					>
						Get all your real estate needs through technology. We have taken the stress in real
						estate away from you, the customer.
					</animated.p>
				</animated.div>

				{/* Form Section with Submit Button */}
				<animated.form
					style={{ ...fadeIn, ...slideInFromLeft }}
					className={`${styles.paragraph} max-w-[470px] mt-4 ml-4`}
				>
					<animated.div style={fadeIn} className='mb-4'>
						<h2 className='text-white font-bold text-xl'>FIND A PROPERTY</h2>
					</animated.div>

					<animated.div style={fadeIn} className='mb-4'>
						<label htmlFor='name' className='text-white'>
							Name:
						</label>
						<input
							type='text'
							id='name'
							name='name'
							className='w-full px-3 py-2 border rounded-md text-black'
						/>
					</animated.div>

					<animated.div style={fadeIn} className='mb-4'>
						<label htmlFor='email' className='text-white'>
							Email:
						</label>
						<input
							type='email'
							id='email'
							name='email'
							className='w-full px-3 py-2 border rounded-md text-black'
						/>
					</animated.div>

					<animated.div style={fadeIn} className='mb-4'>
						<label htmlFor='location' className='text-white'>
							Location:
						</label>
						<select
							id='location'
							name='location'
							className='w-full px-3 py-2 border rounded-md text-black bg-transparent backdrop-blur-md'
						>
							{property_locations.map((location) => (
								<option key={location.value} value={location.value}>
									{location.label}
								</option>
							))}
						</select>
					</animated.div>

					<animated.div style={fadeIn} className='mb-4'>
						<label htmlFor='propertyType' className='text-white'>
							Property Type:
						</label>
						<select
							id='propertyType'
							name='propertyType'
							className='w-full px-3 py-2 border rounded-md text-black bg-transparent backdrop-blur-md'
						>
							<option value='residential'>Residential</option>
							<option value='commercial'>Commercial</option>
						</select>
					</animated.div>

					<animated.button
						style={fadeIn}
						type='submit'
						className='bg-red-700 text-white px-4 py-2 rounded-md hover:bg-red-800 transition duration-300'
					>
						Submit
					</animated.button>
				</animated.form>
			</div>

			{/* Right Content */}
			<animated.div
				style={{ ...fadeIn, marginLeft: -100 }}
				className={`ss:hidden ${styles.flexCenter}`}
			>
				<GetStarted />
			</animated.div>
		</section>
	);
};

export default Hero;
