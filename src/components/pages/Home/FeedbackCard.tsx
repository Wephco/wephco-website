import quotes from '../../../assets/quotes.svg';

const FeedbackCard = ({
	content,
	name,
	title,
}: {
	content: string;
	name: string;
	title: string;
}) => {
	return (
		<div className='flex justify-between flex-col px-10 py-10 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card shadow-2xl duration-200 hover:scale-110'>
			<img src={quotes} alt='double-quotes' className='w-[42px] h-[27px] object-contain' />
			<p className='font-poppins font-normal text-[18px] leading-[32px] text-black my-10'>
				{content}
			</p>

			<div className='flex flex-row'>
				<div className='flex flex-col ml-4'>
					<h4 className='font-poppins font-semibold text-[20px] leading-[32px] text-black'>
						{name}
					</h4>
					<p className='font-poppins font-normal text-[16px] leading-[24px] text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-black'>
						{title}
					</p>
				</div>
			</div>
		</div>
	);
};

export default FeedbackCard;
