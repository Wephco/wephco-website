import styles from '../../style';
import GetStarted from '../../common/GetStartedButton';
import property from '../../../assets/property.png';
import { Link } from 'react-router-dom';

const Hero = () => {
	return (
		<section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
			<div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
				<div className='flex flex-row items-center py-[6px] px-4 bg-black rounded-[10px] mb-2'>
					<Link to='/property-request' className={`${styles.paragraph} ml-2 text-white`}>
						FIND A <span className=''> PROPERTY </span>
						NOW
					</Link>
				</div>

				<div className='flex flex-row justify-between items-center w-full'>
					<h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-black ss:leading-[100px] leading-[75px]'>
						Tech <br className='sm:block hidden' />{' '}
						<span className='text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-black'>
							Meets
						</span>{' '}
					</h1>
				</div>

				<h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-black ss:leading-[100px] leading-[75px] w-full'>
					Real Estate.
				</h1>

				<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
					Get all your real estate needs through technology. We have taken the stress in real estate
					away from you, the customer.
				</p>
			</div>

			<div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
				<img src={property} alt='Property' className='w-[100%] h-[100%] relative z-[5]' />

				<div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient' />
				<div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 black__gradient' />
				<div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient' />
			</div>

			<div className={`ss:hidden ${styles.flexCenter}`}>
				<GetStarted />
			</div>
		</section>
	);
};

export default Hero;
