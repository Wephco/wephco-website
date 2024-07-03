import FeedbackCard from './FeedbackCard';
import styles from '../../style';
import { feedbacks } from '../../../utils/constants';

const Feedback = () => {
	return (
		<section id='clients' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
			<div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient' />

			<div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
				<h1 className={`${styles.heading2}`}>
					What people are <br className='sm:block hidden' /> saying about us
				</h1>
				<div className='w-full md:mt-0 mt-6'>
					<p className={`${styles.paragraph} text-left max-w-[450px]`}>
						One platform to get all your real estate and hospitality needs
					</p>
				</div>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-3'>
				{feedbacks.map((feedback) => (
					<div className='col-span-1' key={feedback.id}>
						<FeedbackCard {...feedback} />
					</div>
				))}
			</div>
		</section>
	);
};

export default Feedback;
