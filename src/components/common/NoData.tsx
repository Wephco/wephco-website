import { FaBoxOpen } from 'react-icons/fa';

const NoData = ({ content }: { content: string }) => {
	return (
		<div>
			<div className='mt-5'>
				<FaBoxOpen className='mx-auto text-9xl text-gray-400' />
				<h4 className='text-3xl font-bold'>{content}</h4>
			</div>
		</div>
	);
};

export default NoData;
