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

			<div className='grid lg:grid-cols-2 gap-4 p-4 lg:px-4 lg:py-0 place-items-center lg:place-items-start'>
				<div>
					<img src={d1} className='rounded-xl h-[650px]' />
				</div>
				<div className='grid lg:grid-cols-2 gap-4'>
					<img src={d2} className='h-40 lg:h-64 rounded-xl' />
					<img src={d3} className='h-40 lg:h-64 rounded-xl' />
					<div className='col-span-2'>
						<h2 className='text-black text-2xl uppercase font-bold'>
							Gardenia Bay WATERFRONT APARTMENTS
						</h2>
						<h2 className='text-xl uppercase font-bold text-gray-500'>Starting FROM AED $250k</h2>
						<h2 className='text-xl uppercase font-bold text-gray-500'>
							4-BED TOWNHOUSES FROM $1.5M
						</h2>
						<h2 className='text-black text-2xl uppercase font-bold'>PAYMENT PLAN:</h2>
						<h2 className='text-xl uppercase font-bold text-gray-500'>
							APARTMENTS: 5% DOWN PAYMENT | 40/60 PAYMENT PLAN
						</h2>
						<h2 className='text-xl uppercase font-bold text-gray-500'>
							TOWNHOUSES: 10% DOWN PAYMENT | 50/50 PAYMENT PLAN
						</h2>
						<p className='text-lg text-black mt-3'>
							We are thrilled to introduce you and your clients to a new level of waterfront resort
							living at Gardenia Bay in Abu Dhabi. This exceptional development offers a blend of
							elegance and excitement, where every detail is crafted to surprise. An urban beach and
							pool. Vibrant spaces to work, play and train. A buzzing community hub and house
							cinema. This is resort living with flair.
						</p>
						<button
							onClick={() => setOpenModal(true)}
							className='mt-3 btn bg-primary text-white hover:bg-white hover:text-primary'
						>
							Get In Touch
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export { DiasporaPropertyListing };
