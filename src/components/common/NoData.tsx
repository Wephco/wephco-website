import { FaBoxOpen } from 'react-icons/fa';

const NoData = ({ content }: { content: string }) => {
	return (
		<div>
			<div className='flex flex-col justify-center mt-5'>
				<FaBoxOpen className='mx-auto text-9xl text-gray-400' />
				<h1 className='text-3xl font-bold'>{content}</h1>
			</div>
		</div>
	);
};

export default NoData;
