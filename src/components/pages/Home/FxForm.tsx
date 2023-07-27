import { useState, useCallback, useEffect } from 'react';

const FxForm = () => {
	const [currency, setCurrency] = useState('$');
	const [rate, setRate] = useState(793);
	const [amount, setAmount] = useState(0);
	const [fee, setFee] = useState(0);

    const proceed = () => {}

	const changeRate = useCallback(() => {
		if (currency === '£') {
			setRate(1018);
		}
		if (currency === '€') {
			setRate(881);
		}
		if (currency === '$') {
			setRate(793);
		}
	}, [currency]);

	const changeFee = useCallback(() => {
		if (isNaN(fee)) {
			setFee(0);
		}

		setFee(amount * 0.03);
	}, [amount]);

	useEffect(() => {
		changeRate();
	}, [changeRate]);

	useEffect(() => {
		changeFee();
	}, [changeFee]);

	return (
		<div className='w-96 shadow-2xl rounded-3xl p-8'>
            <form>
			<div className='flex flex-col items-center'>
                
				<label className='label font-bold' htmlFor='amount'>
					Send Amount
				</label>
				<div className='join' id='amount'>
					<div>
						<button className='btn btn-square rounded-l-full'>{currency}</button>
					</div>
					<div className='join-item'>
						<input
							className='input input-bordered focus:border-collapse'
							id='amount'
							type='number'
							value={amount}
                            max={1000000}
							onChange={(e) => setAmount(parseInt(e.target.value))}
							required
						/>
					</div>
					<select
						className='select select-bordered rounded-r-full join-item'
						onChange={(e) => setCurrency(e.target.value)}
					>
						<option value='$' selected>
							USD
						</option>
						<option value='€'>EUR</option>
						<option value='£'>GBP</option>
					</select>
				</div>

				<span className='text-error text-xs font-semibold mt-2'>You can send a minimum of {currency}50</span>

				<div className='flex justify-center my-5 bg-success px-2 rounded-full'>
					<p className='text-success-content font-bold mx-10'>
						{currency}1 = ₦{rate}
					</p>
				</div>

				<label className='label font-bold' htmlFor='recipient'>
					Recipient Gets
				</label>
				<div className='join' id='recipient'>
					<div>
						<button className='btn btn-square rounded-l-full'>₦</button>
					</div>
					<div className='join-item'>
						<input
							className='input input-bordered text-black'
							id='amount'
							type='number'
							value={amount * rate}
							// onChange={(e) => setEmailAddress(e.target.value)}
							required
						/>
					</div>
					<select className='select select-bordered rounded-r-full join-item' disabled>
						<option value='₦' selected>
							NGN
						</option>
					</select>
				</div>
			</div>
			<div className='flex flex-row justify-between my-5'>
				<h5 className='font-medium text-gray-400 uppercase text-sm'>Delivery Method</h5>
				<h5 className='text-black uppercase text-sm font-medium'>Bank Transfer</h5>
			</div>
			<div className='flex flex-row justify-between my-5'>
				<h5 className='font-medium text-gray-400 uppercase text-sm'>Fee</h5>
				<h5 className='text-black uppercase text-sm font-medium'>
					{currency}
					{fee.toLocaleString('en-US')}
				</h5>
			</div>
			<div className='flex flex-row justify-between my-5'>
				<h5 className='font-medium text-gray-400 uppercase text-sm'>Transfer Time</h5>
				<h5 className='text-black uppercase text-sm font-medium'>Minutes</h5>
			</div>

			<hr />

			<div className='flex flex-row justify-between my-5'>
				<h5 className='font-medium text-gray-400 uppercase text-sm'>Amount to Pay</h5>
				<h5 className='text-black uppercase text-sm font-medium'>
					{currency}
					{(amount + fee).toLocaleString('en-US')}
				</h5>
			</div>

			<div className='flex flex-row justify-between my-5'>
				<h5 className='font-medium text-gray-400 uppercase text-sm'>Recipient Gets</h5>
				<h5 className='text-black uppercase text-sm font-medium'>
					₦{(amount * rate).toLocaleString('en-US')}
				</h5>
			</div>

            <div>
                <button onClick={proceed} className='btn btn-success btn-block rounded-full'>Send Money</button>
            </div>
            </form>
		</div>
	);
};

export default FxForm;
