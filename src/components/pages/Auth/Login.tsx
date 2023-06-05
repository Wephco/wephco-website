import { useState, FormEvent, useContext } from 'react';
import Loader from '../../common/Loader';
import WarningAlert from '../../common/alerts/WarningAlert';
import ErrorAlert from '../../common/alerts/ErrorAlert';
import { endpoints } from '../../../utils/URL';
// import axios from 'axios';
import { ApiHelper } from '../../../utils/apiHelper';
import { AppContext, AppContextType } from '../../../context/AppContext';
import { useNavigate } from 'react-router-dom';

interface LoginResponse {
	token: string;
	name: string;
	email: string;
}

const Login = () => {
	const { setName, setEmail, setToken, setIsAuthenticated } = useContext(
		AppContext,
	) as AppContextType;

	const navigate = useNavigate();

	const [emailAddress, setEmailAddress] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();

		// Validate form
		if (!emailAddress || !password) {
			<WarningAlert content='Please fill in all fields' />;
			return;
		}

		// Start loading
		setLoading(true);

		// Login user
		try {
			const payload = {
				email: emailAddress,
				password: password,
			};

			const response = await new ApiHelper().post(endpoints.Auth.login, payload);

			const loginData: LoginResponse = response.data;

			// Set user data
			setName(loginData.name);
			setEmail(loginData.email);
			setToken(loginData.token);
			setIsAuthenticated(true);

			// Redirect to home
			navigate('/home');

			// Reset form
			setEmailAddress('');
			setPassword('');
		} catch (error) {
			<ErrorAlert content='Error loging in. Try again later' />;
		} finally {
			// Stop loading
			setLoading(false);
		}
	};

	return (
		<div className='flex justify-center items-center h-screen'>
			<form className='bg-white shadow-md rounded px-10 py-10 mb-4' onSubmit={handleSubmit}>
				<img src='/logo150.png' alt='Wephco Logo' className='text-center rounded' />
				{/* <h2 className='text-2xl font-bold mb-8 text-center'>Login</h2> */}
				<fieldset disabled={loading}>
					<div className='mb-4'>
						<label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
							Email
						</label>
						<input
							className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
							id='email'
							type='email'
							placeholder='Enter your email'
							value={emailAddress}
							onChange={(e) => setEmailAddress(e.target.value)}
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
							{loading ? <Loader /> : 'Login'}
						</button>
					</div>
				</fieldset>
			</form>
		</div>
	);
};

export default Login;
