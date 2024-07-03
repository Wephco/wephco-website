import { useState, useEffect, useContext } from 'react';
// import ApiHelper from '../../../utils/apiHelper';
// import NoData from '../../common/NoData';
// import { endpoints } from '../../../utils/URL';
import { FaTrash, FaCheck } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
// import Loader from '../../common/Loader';
import { AppContext, AppContextType } from '../../../context/AppContext';
// import { useNavigate } from 'react-router-dom';
import { IPropertyRequest } from '../../../interfaces/PropertyRequestInterface';
import { db, deleteDocument, updateDocument } from '../../../utils/firebaseFunctions';
import { query, collection, onSnapshot } from 'firebase/firestore';
// import { ModalPrompt } from '../../common/ModalPrompt';
// import { Modal, Button } from 'react-daisyui';

const PropertyRequests = () => {
	const { setToastContent, setToastOpen, setToastVariant } = useContext(
		AppContext,
	) as AppContextType;

	const [requests, setRequests] = useState<IPropertyRequest[]>([]);

	const sortRequests = () => {
		const sortedRequests = requests.sort(
			(a, b) => new Date(b.dateOfRequest).getTime() - new Date(a.dateOfRequest).getTime(),
		);
		setRequests(sortedRequests);
	};

	const checkRequest = (property: IPropertyRequest) => {
		const answer = prompt('Mark property as attended to? (YES/NO)') as string;
		if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y') {
			checkProperty(property);
		} else {
			setToastContent('Update Operation Cancelled');
			setToastVariant('info');
			setToastOpen(true);
			return;
		}
	};

	const checkProperty = async (property: IPropertyRequest) => {
		property.attendedTo = true;

		try {
			await updateDocument('leads', property, property.id);
			setToastContent('Property updated successfully');
			setToastVariant('success');
			setToastOpen(true);
		} catch (error) {
			setToastContent('Error updating property');
			setToastVariant('error');
			setToastOpen(true);
		}
	};

	const deleteRequest = (id: string) => {
		deleteProperty(id);
	};

	const deleteProperty = async (id: string) => {
		const code = prompt('Please Enter Authorization Code') as string;

		if (code.trim().toLowerCase() === 'weph20233' || code.trim().toLowerCase() === 'neto') {
			try {
				await deleteDocument('property-request', id);
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

	useEffect(() => {
		const q = query(collection(db, 'leads'));
		const unsubscribe = onSnapshot(q, (querySnapshot) => {
			const propertyRequests: React.SetStateAction<any[]> = [];
			querySnapshot.forEach((doc) => {
				propertyRequests.push({ ...doc.data(), id: doc.id });
			});
			setRequests(propertyRequests);
			sortRequests();
		});

		return unsubscribe;
	}, []);

	let tableHead = (
		<thead>
			<tr>
				<th>Actions</th>
				<th>Name</th>
				<th>Email</th>
				<th>Phone</th>
				<th>Location</th>
				<th>Property Type</th>
				<th>Budget</th>
				<th>Service Type</th>
				<th>Request Attended To</th>
				<th>Date Requested</th>
			</tr>
		</thead>
	);

	let tableBody = (
		<tbody>
			{requests.map((request) => (
				<tr key={request.id}>
					<td className='flex gap-8 flex-wrap cursor-pointer'>
						<div className='tooltip tooltip-right' data-tip='Mark as attended to'>
							<FaCheck
								className='text-green-500 cursor-pointer'
								onClick={() => checkRequest(request)}
							/>
						</div>
						<div className='tooltip tooltip-right' data-tip='Delete Request'>
							<FaTrash
								className='text-red-500 cursor-pointer'
								onClick={() => deleteRequest(request.id)}
							/>
						</div>
					</td>
					<td>{request.name}</td>
					<td>{request.email}</td>
					<td>{request.phone}</td>
					<td>{request.location}</td>
					<td>{request.propertyType}</td>
					<td>{request.budget}</td>
					<td>{request.serviceType}</td>
					<td>{request.attendedTo ? <FaCheck /> : <ImCross />}</td>
					<td>{request.dateOfRequest}</td>
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

				<div className='w-full overflow-x-auto'>
					<table className='table'>
						{tableHead}
						{tableBody}
					</table>
				</div>
			</div>
		</section>
	);
};

export default PropertyRequests;
