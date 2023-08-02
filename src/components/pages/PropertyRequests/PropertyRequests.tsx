import { useState, useCallback, useEffect, useContext } from 'react';
// import ApiHelper from '../../../utils/apiHelper';
import NoData from '../../common/NoData';
// import { endpoints } from '../../../utils/URL';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Loader from '../../common/Loader';
import { AppContext, AppContextType } from '../../../context/AppContext';
// import { useNavigate } from 'react-router-dom';
import { IPropertyRequest } from '../../../interfaces/PropertyRequestInterface';
import { getAllDocuments } from '../../../utils/firebaseFunctions';

const PropertyRequests = () => {
	const { setToastContent, setToastOpen, setToastVariant } = useContext(
		AppContext,
	) as AppContextType;

	// const api = new ApiHelper();

	// const navigate = useNavigate();

	const [requests, setRequests] = useState<IPropertyRequest[]>([]);
	const [loading, setLoading] = useState(false);

	const getRequests = useCallback(async () => {
		setLoading(true);

		try {
			const response = await getAllDocuments('propertyRequests');
			setRequests(response);
		} catch (error) {
			setToastContent('Error getting property listings. Try again later');
			setToastVariant('error');
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
				<th>title</th>
				<th>Name</th>
				<th>Email</th>
				<th>Phone Number</th>
				<th>Request Type</th>
				<th>Property Type</th>
				<th>Location</th>
				<th>Prefered Service</th>
				<th>budget</th>
				<th>Notes</th>
			</tr>
		</thead>
	);

	let tableBody = (
		<tbody>
			{requests.map((request, index) => (
				<tr key={index}>
					<td className='flex flex-wrap'>
						<div className='tooltip' data-tip='Edit Property'>
							<FaEdit className='text-yellow-500 mr-2 cursor-pointer' />
						</div>
						<div className='tooltip' data-tip='Delete Property'>
							<FaTrash className='text-red-500 cursor-pointer' />
						</div>
					</td>
					<td>{request.title}</td>
					<td>{request.name}</td>
					<td>{request.email}</td>
					<td>{request.phoneNumber}</td>
					<td>{request.requestType}</td>
					<td>{request.propertyType}</td>
					<td>{request.location}</td>
					<td>{request.preferedService}</td>
					<td>{request.budget}</td>
					<td>{request.additionalNotes}</td>
				</tr>
			))}
		</tbody>
	);

	return (
		<section>
			<div className='bg-white'>
				<div className='flex justify-between m-5'>
					<div>
						<h1 className='text-3xl font-semibold'>Property Requests</h1>
					</div>
					<div className='hidden'>
						<button className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow'>
							Add Request
						</button>
					</div>
				</div>

				{loading && (
					<div className='flex justify-center items-center'>
						<Loader />
					</div>
				)}

				{!loading && requests?.length === 0 && (
					<div className='flex justify-center items-center'>
						<NoData content='No Properties listed' />
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
		</section>
	);
};

export default PropertyRequests;
