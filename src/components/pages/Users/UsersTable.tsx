import { useState, useCallback, useEffect, useContext } from 'react';
import ApiHelper from '../../../utils/apiHelper';
import NoData from '../../common/NoData';
import { endpoints } from '../../../utils/URL';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Loader from '../../common/Loader';
import { AppContext, AppContextType } from '../../../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { ICreateUserResponse } from '../../../interfaces/UserInterface';

const UsersTable = () => {
	const { token, setToastContent, setToastOpen, setToastVariant } = useContext(
		AppContext,
	) as AppContextType;

	const api = new ApiHelper();

	const navigate = useNavigate();

	const [users, setUsers] = useState<ICreateUserResponse[]>([]);
	const [loading, setLoading] = useState(false);

	const addUser = () => {
		navigate('/users/add');
	};

	const getUsers = useCallback(async () => {
		setLoading(true);

		try {
			const response = await api.getData(endpoints.User.mainUrl, token);
			setUsers(response);
		} catch (error) {
			setToastVariant('error');
			setToastContent(`${error}`);
			setToastOpen(true);
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		getUsers();
	}, [getUsers]);

	let tableHead = (
		<thead>
			<tr>
				<th>Actions</th>
				<th>Name</th>
				<th>Email</th>
				<th>Role</th>
				<th>Phone Number</th>
			</tr>
		</thead>
	);

	let tableBody = (
		<tbody>
			{users.map((user) => (
				<tr key={user.id}>
					<td className='flex flex-wrap'>
						<div className='tooltip tooltip-right' data-tip='Edit Property'>
							<FaEdit className='text-yellow-500 mr-2 cursor-pointer' />
						</div>
						<div className='tooltip tooltip-right' data-tip='Delete Property'>
							<FaTrash className='text-red-500 cursor-pointer' />
						</div>
					</td>
					<td>{user.name}</td>
					<td>{user.email}</td>
					<td>{user.role}</td>
					<td>{user.phoneNumber}</td>
				</tr>
			))}
		</tbody>
	);

	return (
		<div className='bg-white'>
			<div className='flex justify-between m-5'>
				<div>
					<h1 className='text-2xl font-semibold'>Users</h1>
				</div>
				<div>
					<button
						className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow'
						onClick={addUser}
					>
						Add User
					</button>
				</div>
			</div>

			{loading && (
				<div className='flex justify-center items-center'>
					<Loader />
				</div>
			)}

			{!loading && users?.length === 0 && (
				<div className='flex justify-center items-center'>
					<NoData content='No Users listed' />
				</div>
			)}

			{!loading && users?.length > 0 && (
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

export default UsersTable;
