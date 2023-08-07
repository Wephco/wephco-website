import { useState, useContext } from 'react';
// import { endpoints } from '../../../utils/URL';
// import ApiHelper from '../../../utils/apiHelper';
import { newUser } from '../../../interfaces/UserInterface';
import { AppContext, AppContextType } from '../../../context/AppContext';
import Loader from '../../common/Loader';
import { user_roles } from '../../../utils/constants';
import { createUser, addDocument } from '../../../utils/firebaseFunctions';

const CreateUser = () => {
	const { setToastContent, setToastOpen, setToastVariant } = useContext(
		AppContext,
	) as AppContextType;

	const [user, setUser] = useState(newUser);
	const [loading, setLoading] = useState(false);
	const [code, setCode] = useState('');

	// const api = new ApiHelper();

	const handleChange = (input: string) => (e: any) => {
		setUser({
			...user,
			[input]: e.target.value,
		});
	};

	const submitNewUser = async (e: any) => {
		e.preventDefault();

		if (code.toLowerCase().trim() === 'neto' || code.toLowerCase().trim() === 'Weph20233') {
			setLoading(true);

			try {
				await createUser(user.email, user.password);
				await addDocument('users', user);
				setToastVariant('success');
				setToastContent('User Created successfully');
				setToastOpen(true);
				setUser(newUser);
			} catch (error) {
				setToastVariant('error');
				setToastContent(`${error}`);
				setToastOpen(true);
			} finally {
				setLoading(false);
			}
		} else {
			setToastVariant('error');
			setToastContent(`Cannot create new user. Wrong authorization code`);
			setToastOpen(true);
		}
	};

	return (
		<div>
			<div className='mt-10'>
				<h1 className='text-center text-2xl font-bold mb-5'>Add New User Form</h1>
				<div className='flex flex-col items-center'>
					<div className='shadow-2xl w-[500px] p-8 rounded-2xl'>
						<form>
							<fieldset disabled={loading}>
								<div className='form-control mb-3'>
									<label className='label font-bold' htmlFor='name'>
										Name
									</label>
									<input
										value={user.name}
										onChange={handleChange('name')}
										type='text'
										className='input input-bordered'
										id='name'
										required
									/>
								</div>

								<div className='form-control mb-3'>
									<label className='label font-bold' htmlFor='email'>
										Email
									</label>
									<input
										type='email'
										value={user.email}
										onChange={handleChange('email')}
										className='input input-bordered'
										id='email'
										required
									/>
								</div>
								<div className='form-control mb-3'>
									<label className='label font-bold' htmlFor='password'>
										Password
									</label>
									<input
										type='password'
										value={user.password}
										onChange={handleChange('password')}
										className='input input-bordered'
										id='password'
										required
									/>
								</div>
								<div className='form-control mb-3'>
									<label className='label font-bold' htmlFor='address'>
										Role
									</label>
									<select
										value={user.role}
										onChange={handleChange('role')}
										className='select select-bordered'
										id='address'
										required
									>
										<option value='-'>-</option>
										{user_roles.map((role) => (
											<option key={role.label} value={role.value}>
												{role.label}
											</option>
										))}
									</select>
								</div>
								<div className='form-control mb-3'>
									<label className='label font-bold' htmlFor='phoneNumber'>
										Phone Number
									</label>
									<input
										type='text'
										value={user.phoneNumber}
										onChange={handleChange('phoneNumber')}
										className='input input-bordered'
										id='phoneNumber'
										required
									/>
								</div>

								<div className='form-control mb-3'>
									<label className='label font-bold' htmlFor=''>
										Authorization Code
									</label>
									<input
										type='text'
										value={code}
										onChange={(e) => setCode(e.target.value)}
										className='input input-bordered'
										id=''
									/>
								</div>

								<button
									onClick={submitNewUser}
									type='submit'
									className='btn btn-block btn-error mt-3'
								>
									{loading ? <Loader /> : 'Submit'}
								</button>
							</fieldset>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreateUser;
