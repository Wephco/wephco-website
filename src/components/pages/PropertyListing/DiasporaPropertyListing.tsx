import { useState } from 'react';
import d1 from '../../../assets/d1.jpg';
import d2 from '../../../assets/d2.jpg';
import d3 from '../../../assets/d3.jpg';
import DiasporaForm from './DiasporaForm';

const DiasporaPropertyListing = () => {
	const [openModal, setOpenModal] = useState(false);

	let diasporaForm = <DiasporaForm open={openModal} close={() => setOpenModal(false)} />;

	return (
		<div className='mb-8'>
			{diasporaForm}
			<div className='text-center'>
				<h1 className='text-3xl font-bold my-8'>Diaspora Properties</h1>
			</div>

			<div className='grid lg:grid-cols-2 gap-4'>
				<div>
					<img src={d1} className='rounded-xl h-[650px]' />
				</div>
				<div className='grid lg:grid-cols-2 gap-4'>
					<img src={d2} className='h-64 rounded-xl' />
					<img src={d3} className='h-64 rounded-xl' />
					<div className='col-span-2'>
						<h2 className='text-black text-2xl uppercase font-bold'>
							Fay Alreeman II, Al Shamkha, Abu Dhabi
						</h2>
						<h2 className='text-xl uppercase font-bold text-gray-500'>$1,500,000</h2>
						<p className='text-lg text-black mt-3'>
							We are excited to inform you and your clients of our exclusive Ramadan offer at Fay
							Alreeman II community in Al Shamkha. Introduce your clients to a selection of premium
							villas that open up to expansive green spaces, exhilarating adventure parks, tracks
							and sports courts-everything they need to enjoy life to the fullest. 4 to 6-bedrooms
							villas in Al Shamkha from AED 3.47M | 10% down payment
						</p>
						<button
							onClick={() => setOpenModal(true)}
							className='mt-3 btn bg-primary text-white hover:bg-white hover:text-primary'
						>
							Enquire
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export { DiasporaPropertyListing };
