import { useState, useEffect, useContext, useCallback } from 'react';
import { FaTrash } from 'react-icons/fa';
import Loader from '../../common/Loader';
import { AppContext, AppContextType } from '../../../context/AppContext';
import { IConsultation } from '../../../interfaces/ConsultationInterface';
import { getAllDocuments, deleteDocument } from '../../../utils/firebaseFunctions';
import NoData from '../../common/NoData';

const ConsultationTable = () => {
	const { setToastContent, setToastOpen, setToastVariant } = useContext(
		AppContext,
	) as AppContextType;

	const [requests, setRequests] = useState<IConsultation[]>([]);
	const [loading, setLoading] = useState(false);

	const deleteRequest = (id: string) => {
		deleteConsultation(id);
	};

	const deleteConsultation = async (id: string) => {
		const code = prompt('Please Enter Authorization Code') as string;

		if (code.toLowerCase().trim() === 'weph20233' || code.toLowerCase().trim() === 'neto') {
			try {
				await deleteDocument('consultations', id);
				setToastContent('Property Request deleted successfully');
				setToastVariant('success');
				setToastOpen(true);
			} catch (error) {
				setToastContent('Error deleting property');
				setToastVariant('error');
				setToastOpen(true);
			}
		} else {
			setToastContent('Invalid Authorization Code');
			setToastVariant('error');
			setToastOpen(true);
			return;
		}
	};

	const getRequests = useCallback(async () => {
		setLoading(true);

		try {
			const response = await getAllDocuments('consultations');
			setRequests(response);
		} catch (error) {
			setToastVariant('error');
			setToastContent(`${error}`);
			setToastOpen(true);
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		getRequests();
	}, [getRequests]);

	let tableHead = (
		<thead>
			<tr>
				<th>Actions</th>
				<th>Name</th>
				<th>Email</th>
				<th>Phone Number</th>
				<th>Contact</th>
				<th>Service</th>
				<th>Message</th>
			</tr>
		</thead>
	);

	let tableBody = (
		<tbody>
			{requests.map((request) => (
				<tr key={request.id}>
					<td className='flex flex-wrap'>
						<div className='tooltip tooltip-right' data-tip='Delete Request'>
							<FaTrash
								className='text-red-500 cursor-pointer'
								onClick={() => deleteRequest(request.id)}
							/>
						</div>
					</td>
					<td>{request.name}</td>
					<td className='text-blue-400'>
						<a href={`mailto:${request.email}`}>{request.email}</a>
					</td>
					<td className='text-blue-400'>
						<a href={`tel:${request.phoneNumber}`}>{request.phoneNumber}</a>
					</td>
					<td>{request.contactMethod}</td>
					<td>{request.service}</td>
					<td>{request.message}</td>
				</tr>
			))}
		</tbody>
	);

	return (
		<div className='bg-white'>
			<div className='flex justify-between m-5'>
				<div>
					<h1 className='text-2xl font-semibold'>Consultation Requests</h1>
				</div>
			</div>

			{loading && (
				<div className='flex justify-center items-center'>
					<Loader />
				</div>
			)}

			{!loading && requests?.length === 0 && (
				<div className='flex justify-center items-center'>
					<NoData content='No Users listed' />
				</div>
			)}

			{!loading && requests?.length > 0 && (
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

export { ConsultationTable };
