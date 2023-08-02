import { useState, useCallback, useEffect, useContext } from 'react';
// import ApiHelper from '../../../utils/apiHelper';
import NoData from '../../common/NoData';
// import { endpoints } from '../../../utils/URL';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Loader from '../../common/Loader';
import { AppContext, AppContextType } from '../../../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { IProperties } from '../../../interfaces/PropertyListingInterface';
import { getAllDocuments } from '../../../utils/firebaseFunctions';

const DiasporaPropertyListing = () => {
	const { setToastContent, setToastOpen } = useContext(AppContext) as AppContextType;

	// const api = new ApiHelper();

	const navigate = useNavigate();

	const [properties, setProperties] = useState<IProperties[]>([]);
	const [loading, setLoading] = useState(false);

	const addProperty = () => {
		navigate('/diaspora/property-listings/add');
	};

	const getProperties = useCallback(async () => {
		setLoading(true);

		try {
			const response = await getAllDocuments('diasporaProperties');
			setProperties(response);
		} catch (error) {
			setToastContent('Error getting property listings. Try again later');
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
				<th>Agent ID</th>
				<th>Location</th>
				<th>Property Type</th>
				<th>Number of Rooms</th>
				<th>Number of Toilets</th>
				<th>Number of Bathrooms</th>
				<th>Number of Living Rooms</th>
				<th>Number of Kitchens</th>
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
					<td>{property.agentId}</td>
					<td>{property.location}</td>
					<td>{property.propertyType}</td>
					<td>{property.numberOfrooms}</td>
					<td>{property.numberOfToilets}</td>
					<td>{property.numberOfBathrooms}</td>
					<td>{property.numberOfLivingRooms}</td>
					<td>{property.numberOfKitchens}</td>
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
					<button
						className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow'
						onClick={addProperty}
					>
						Add Property
					</button>
				</div>
			</div>

			{loading && (
				<div className='flex justify-center items-center'>
					<Loader />
				</div>
			)}

			{!loading && properties?.length === 0 && (
				<div className='flex justify-center items-center'>
					<NoData content='No Properties listed' />
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
