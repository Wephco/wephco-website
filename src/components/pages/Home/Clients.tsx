import styles from '../../style';
import { clients } from '../../../utils/constants';

const Clients = () => {
	return (
		<div>
			<h2 className='text-center font-poppins my-10'>Trusted by Reputable Nigerian Companies</h2>
			<section className={`${styles.flexCenter} my-4`}>
				<div className={`${styles.flexCenter} flex-wrap w-full`}>
					{clients.map((client) => (
						<div
							key={client.id}
							className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}
						>
							<img src={client.logo} alt='client' className='w-[100px] object-contain' />
						</div>
					))}
				</div>
			</section>
		</div>
	);
};

export default Clients;
