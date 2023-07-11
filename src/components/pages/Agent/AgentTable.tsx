import { useState, useCallback, useEffect, useContext } from 'react';
import ApiHelper from '../../../utils/apiHelper';
import NoData from '../../common/NoData';
import { endpoints } from '../../../utils/URL';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Loader from '../../common/Loader';
import { AppContext, AppContextType } from '../../../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { IAgent } from '../../../interfaces/AgentsInterface';

const AgentTable = () => {
	const { token, setToastContent, setToastOpen, setToastVariant } = useContext(
		AppContext,
	) as AppContextType;

	const api = new ApiHelper();

	const navigate = useNavigate();

	const [agents, setAgents] = useState<IAgent[]>([]);
	const [loading, setLoading] = useState(false);

	const addAgent = () => {
		navigate('/agents/add');
	};

	const getAgents = useCallback(async () => {
		setLoading(true);

		try {
			const response = await api.getData(endpoints.Agents.mainUrl, token);
			setAgents(response);
		} catch (error) {
			setToastVariant('error');
			setToastContent(`${error}`);
			setToastOpen(true);
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		getAgents();
	}, [getAgents]);

	let tableHead = (
		<thead>
			<tr>
				<th>Actions</th>
				<th>Name</th>
				<th>Email</th>
				<th>Address</th>
				<th>Phone Number</th>
				<th>Number of Properties</th>
			</tr>
		</thead>
	);

	let tableBody = (
		<tbody>
			{agents.map((agent, index) => (
				<tr key={index}>
					<td className='flex flex-wrap'>
						<div className='tooltip' data-tip='Edit Property'>
							<FaEdit className='text-yellow-500 mr-2 cursor-pointer' />
						</div>
						<div className='tooltip' data-tip='Delete Property'>
							<FaTrash className='text-red-500 cursor-pointer' />
						</div>
					</td>
					<td>{agent.name}</td>
					<td>{agent.email}</td>
					<td>{agent.address}</td>
					<td>{agent.phoneNumber}</td>
					<td>{agent.propertyListings.length}</td>
				</tr>
			))}
		</tbody>
	);

	return (
		<div className='bg-white'>
			<div className='flex justify-between m-5'>
				<div>
					<h1 className='text-2xl font-semibold'>Agents</h1>
				</div>
				<div>
					<button
						className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow'
						onClick={addAgent}
					>
						Add Agent
					</button>
				</div>
			</div>

			{loading && (
				<div className='flex justify-center items-center'>
					<Loader />
				</div>
			)}

			{!loading && agents?.length === 0 && (
				<div className='flex justify-center items-center'>
					<NoData content='No Agents listed' />
				</div>
			)}

			{!loading && agents?.length > 0 && (
				<div className='w-full overflow-x-auto'>
					<table className='table table-xs'>
						{tableHead}
						{tableBody}
					</table>
				</div>
			)}
		</div>
	);
};

export default AgentTable;
