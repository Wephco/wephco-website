// import React from 'react'
import { usePaystackPayment } from 'react-paystack';

const PaystackButton = ({ email, amount }: { email: string; amount: number }) => {
	const config: any = {
		reference: new Date().getTime().toString(),
		email,
		amount,
		pubicKey: import.meta.env.DEV
			? import.meta.env.VITE_PAYSTACK_TEST_KEY
			: import.meta.env.VITE_PAYSTACK_LIVE_KEY,
	};

	const onSuccess = () => {
		// Implementation for whatever you want to do with reference and after success call.
		console.log('paid');
	};

	const onClose = () => {
		// implementation for  whatever you want to do when the Paystack dialog closed.
		console.log('closed');
	};

	const initializePayment = usePaystackPayment(config);

	return (
		<div>
			<button
				className='btn btn-success'
				onClick={() => {
					initializePayment(onSuccess, onClose);
				}}
			>
				Pay Now
			</button>
		</div>
	);
};

export default PaystackButton;
