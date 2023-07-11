import { useState, useContext } from 'react';
import { endpoints } from '../../../utils/URL';
import ApiHelper from '../../../utils/apiHelper';
import { initialAgentObject } from '../../../interfaces/AgentsInterface';
import { AppContext, AppContextType } from '../../../context/AppContext';
import Loader from '../../common/Loader';

const AddAgentForm = () => {
	const { token, setToastContent, setToastOpen, setToastVariant } = useContext(AppContext) as AppContextType;

	const [agent, setAgent] = useState(initialAgentObject);
	const [loading, setLoading] = useState(false);

	const api = new ApiHelper();

	const handleChange = (input: string) => (e: any) => {
		setAgent({
			...agent,
			[input]: e.target.value,
		});
	};

	const submitNewAgent = async (e: any) => {
		e.preventDefault();

		setLoading(true);

		try {
			await api.postData(endpoints.Agents.mainUrl, agent, token);
            setToastVariant('success')
			setToastContent('Agent Created successfully');
			setToastOpen(true);
			setAgent(initialAgentObject)
		} catch (error) {
            setToastVariant('error')
			setToastContent(`${error}`);
			setToastOpen(true);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className='mt-10'>
			<h1 className='text-center text-2xl font-bold mb-5'>Add Agent Form</h1>
			<div className='flex flex-col items-center'>
				<div className='shadow-2xl w-[500px] p-8 rounded-2xl'>
					<form>
						<fieldset disabled={loading}>
							<div className='form-control mb-3'>
								<label className='label font-bold' htmlFor='name'>
									Name
								</label>
								<input
									value={agent.name}
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
									value={agent.email}
									onChange={handleChange('email')}
									className='input input-bordered'
									id='email'
									required
								/>
							</div>
							<div className='form-control mb-3'>
								<label className='label font-bold' htmlFor='address'>
									Address
								</label>
								<input
									type='text'
									value={agent.address}
									onChange={handleChange('address')}
									className='input input-bordered'
									id='address'
									required
								/>
							</div>
							<div className='form-control mb-3'>
								<label className='label font-bold' htmlFor='phoneNumber'>
									Phone Number
								</label>
								<input
									type='text'
									value={agent.phoneNumber}
									onChange={handleChange('phoneNumber')}
									className='input input-bordered'
									id='phoneNumber'
									required
								/>
							</div>

							<button
								onClick={submitNewAgent}
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
	);
};

export default AddAgentForm;
