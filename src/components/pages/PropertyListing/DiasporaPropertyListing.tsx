import { useState, useCallback, useEffect, useContext } from 'react';
// import ApiHelper from '../../../utils/apiHelper';
import NoData from '../../common/NoData';
// import { endpoints } from '../../../utils/URL';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Loader from '../../common/Loader';
import { AppContext, AppContextType } from '../../../context/AppContext';
// import { useNavigate } from 'react-router-dom';
import { IDisaporaPropertyEnquiry } from '../../../interfaces/PropertyListingInterface';
import { getAllDocuments } from '../../../utils/firebaseFunctions';

const DiasporaPropertyListing = () => {
	const { setToastContent, setToastOpen } = useContext(AppContext) as AppContextType;

	// const api = new ApiHelper();

	// const navigate = useNavigate();

	const [properties, setProperties] = useState<IDisaporaPropertyEnquiry[]>([]);
	const [loading, setLoading] = useState(false);

	// const addProperty = () => {
	// 	navigate('/diaspora/property-listings/add');
	// };

	const getProperties = useCallback(async () => {
		setLoading(true);

		try {
			const response = await getAllDocuments('diaspora-property-enquiry');
			setProperties(response);
		} catch (error) {
			setToastContent('Error getting data. Try again later');
			setToastOpen(true);
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		getProperties();
	}, [getProperties]);


	let tableHead = (
		<thead>
			<tr>
				<th>Actions</th>
				<th>Name</th>
				<th>Email</th>
				<th>Phone Number</th>
				<th>Date of Request</th>
			</tr>
		</thead>
	);

	let tableBody = (
		<tbody>
			{properties.map((property, index) => (
				<tr key={index}>
					<td className='flex flex-wrap'>
						<div className='tooltip' data-tip='Edit Property'>
							<FaEdit className='text-yellow-500 mr-2 cursor-pointer' />
						</div>
						<div className='tooltip' data-tip='Delete Property'>
							<FaTrash className='text-red-500 cursor-pointer' />
						</div>
					</td>
					<td>{property.name}</td>
					<td>{property.email}</td>
					<td>{property.phone}</td>
					<td>{property.createdAt}</td>
				</tr>
			))}
		</tbody>
	);

	return (
		<div className='bg-white'>
			<div className='flex justify-between m-5'>
				<div>
					<h1 className='text-3xl font-semibold'>Diaspora Property Listings</h1>
				</div>
				<div>
					{/* <button
						className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow'
						onClick={addProperty}
					>
						Add Property
					</button> */}
				</div>
			</div>

			{loading && (
				<div className='flex justify-center items-center'>
					<Loader />
				</div>
			)}

			{!loading && properties?.length === 0 && (
				<div className='flex justify-center items-center'>
					<NoData content='No Enquiries yet' />
				</div>
			)}

			{!loading && properties?.length > 0 && (
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

export default DiasporaPropertyListing;
