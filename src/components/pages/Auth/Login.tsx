import { useState, FormEvent } from 'react';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		// Perform login logic here, e.g., make API call

		// Reset form
		setEmail('');
		setPassword('');
	};

	return (
		<div className='flex justify-center items-center h-screen'>
			<form className='bg-white shadow-md rounded px-10 py-10 mb-4' onSubmit={handleSubmit}>
            <img src='/logo150.png' alt='Wephco Logo' className='text-center rounded' />
				{/* <h2 className='text-2xl font-bold mb-8 text-center'>Login</h2> */}
				<div className='mb-4'>
					<label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
						Email
					</label>
					<input
						className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						id='email'
						type='email'
						placeholder='Enter your email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</div>
				<div className='mb-6'>
					<label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
						Password
					</label>
					<input
						className='shadow appearance-none border border-red rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
						id='password'
						type='password'
						placeholder='Enter your password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</div>
				<div className='flex items-center justify-between'>
					<button
						className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
						type='submit'
					>
						Login
					</button>
				</div>
			</form>
		</div>
	);
};

export default Login;
