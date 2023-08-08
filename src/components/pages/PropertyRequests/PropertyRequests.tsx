import { useState, useEffect, useContext } from 'react';
// import ApiHelper from '../../../utils/apiHelper';
import NoData from '../../common/NoData';
// import { endpoints } from '../../../utils/URL';
import { FaTrash } from 'react-icons/fa';
// import Loader from '../../common/Loader';
import { AppContext, AppContextType } from '../../../context/AppContext';
// import { useNavigate } from 'react-router-dom';
import { IPropertyRequest } from '../../../interfaces/PropertyRequestInterface';
import { db, deleteDocument } from '../../../utils/firebaseFunctions';
import { query, collection, onSnapshot } from 'firebase/firestore';
// import { ModalPrompt } from '../../common/ModalPrompt';
// import { Modal, Button } from 'react-daisyui';

const PropertyRequests = () => {
	const { setToastContent, setToastOpen, setToastVariant } = useContext(
		AppContext,
	) as AppContextType;

	// const api = new ApiHelper();

	// const navigate = useNavigate();

	// const { Dialog, handleShow } = Modal.useDialog();

	const [requests, setRequests] = useState<IPropertyRequest[]>([]);
	// const [loading, setLoading] = useState(false);
	// const [code, setCode] = useState('');

	// const ref = useRef<HTMLDialogElement>(null);

	// const handleShow = useCallback(() => {
	// 	ref.current?.showModal();
	// }, [ref]);

	// const editRequest = (id: string) => {}

	// const updatePropertyRequest = async (id: string, property: IPropertyRequest) => {
	// 	const code = prompt('Please Enter Authorization Code') as string;

	// 	if (code.toLowerCase().trim() === 'weph20233' || code.toLowerCase().trim() === 'neto') {
	// 		try {
	// 			await updateDocument('propertyRequests', property, id)
	// 			setToastContent('Property Request updated successfully');
	// 			setToastVariant('success');
	// 			setToastOpen(true);
	// 		} catch (error) {
	// 			setToastContent('Error updating property');
	// 			setToastVariant('error');
	// 			setToastOpen(true);
	// 		}
	// 	} else {
	// 		setToastContent('Invalid Authorization Code');
	// 		setToastVariant('error');
	// 		setToastOpen(true);
	// 		return;
	// 	}
	// }

	const deleteRequest = (id: string) => {
		deleteProperty(id);
	};

	const deleteProperty = async (id: string) => {
		const code = prompt('Please Enter Authorization Code') as string;

		if (code.toLowerCase().trim() === 'weph20233' || code.toLowerCase().trim() === 'neto') {
			try {
				await deleteDocument('propertyRequests', id);
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

	// const getRequests = useCallback(async () => {
	// 	setLoading(true);

	// 	try {
	// 		const response = await getAllDocuments('propertyRequests');
	// 		setRequests(response);
	// 	} catch (error) {
	// 		setToastContent('Error getting property listings. Try again later');
	// 		setToastVariant('error');
	// 		setToastOpen(true);
	// 	} finally {
	// 		setLoading(false);
	// 	}
	// }, []);

	useEffect(() => {
		const q = query(collection(db, 'propertyRequests'));
		const unsubscribe = onSnapshot(q, (querySnapshot) => {
			const propertyRequests: React.SetStateAction<any[]> = [];
			querySnapshot.forEach((doc) => {
				propertyRequests.push({ ...doc.data().data, id: doc.id });
			});
			setRequests(propertyRequests);
		});

		return unsubscribe;
	}, []);

	let tableHead = (
		<thead>
			<tr>
				<th>Actions</th>
				<th>Name</th>
				<th>Email</th>
				<th>Phone Number</th>
				<th>Request Type</th>
				<th>Property Type</th>
				<th>Location</th>
				<th>Prefered Service</th>
				<th>Budget</th>
				<th>Notes</th>
			</tr>
		</thead>
	);

	let tableBody = (
		<tbody>
			{requests.map((request) => (
				<tr key={request.id}>
					<td className='flex flex-wrap cursor-pointer'>
						{/* <div className='tooltip tooltip-right' data-tip='Edit Property'>
							<FaEdit className='text-yellow-500 mr-2 cursor-pointer' />
						</div> */}
						<div className='tooltip tooltip-right' data-tip='Delete Property'>
							<FaTrash
								className='text-red-500 cursor-pointer'
								onClick={() => deleteRequest(request.id)}
							/>
						</div>
					</td>
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

	// let promptModal = (
	// 	<Dialog>
	// 		<Button size='sm' color='ghost' shape='circle' className='absolute right-2 top-2'>
	// 			X
	// 		</Button>
	// 		<Modal.Header className='mt-10'>{promptHeader}</Modal.Header>
	// 		<Modal.Body>{promptContent}</Modal.Body>
	// 		<Modal.Actions className='flex justify-between'>
	// 			<Button className='btn-error'>NO</Button>
	// 			<Button className='btn-success' onClick={() => deleteProperty(docId)}>
	// 				YES
	// 			</Button>
	// 		</Modal.Actions>
	// 	</Dialog>
	// );

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

				{/* {loading && (
					<div className='flex justify-center items-center'>
						<Loader />
					</div>
				)} */}

				{requests?.length === 0 && (
					<div className='flex justify-center items-center'>
						<NoData content='No Properties listed' />
					</div>
				)}

				{requests?.length > 0 && (
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
