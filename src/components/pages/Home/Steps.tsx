import styles from '../../style';
import list from '../../../assets/list.svg';
import pay from '../../../assets/pay.svg';
import calendar from '../../../assets/calendar.svg';

const Steps = () => {
	return (
		<section className=''>
			<div className=''>
				<h3 className={`${styles.heading2} text-center`}>Get a property in 3 easy steps</h3>
			</div>
			<div className=''>
				<div className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
					<div className='flex flex-col m-3'>
						<h2 className={`${styles.heading2} text-center`}>1</h2>
						<img src={list} alt='Checklist' className='h-28' />
						<p className={styles.paragraph}>Tell us what you want.</p>
					</div>
					<div className='flex flex-col m-3'>
						<h2 className={`${styles.heading2} text-center`}>2</h2>
						<img src={pay} alt='Checklist' className='h-28' />
						<p className={styles.paragraph}>Pay our service charge.</p>
					</div>
					<div className='flex flex-col m-3'>
						<h2 className={`${styles.heading2} text-center`}>3</h2>
						<img src={calendar} alt='Checklist' className='h-28' />
						<p className={styles.paragraph}>
							Give us a few days to <br className='sm:block' /> give you variety of options.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Steps;
