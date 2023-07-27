import styles from '../../style';
// import GetStarted from '../../common/GetStartedButton';
// import { Link } from 'react-router-dom';
import FxForm from './FxForm';

const Hero = () => {
	return (
		<section id='home' className={`flex md:flex-row flex-col`}>
			<div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
				<div className='flex flex-row justify-between items-center w-full'>
					<h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-black ss:leading-[100px] leading-[75px]'>
						Send money to <br className='sm:block hidden' />{' '}
						<span className='text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-black'>
							Nigeria
						</span>{' '}
					</h1>
				</div>

				<h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-black ss:leading-[100px] leading-[75px] w-full'>
					faster and cheaper.
				</h1>

				<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
					Use Wephco FX to quickly and reliably exchange and send money to any local bank account.
				</p>
			</div>

			<div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative p-5`}>
				<FxForm />
			</div>

		</section>
	);
};

export default Hero;
