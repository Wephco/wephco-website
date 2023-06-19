import { useState, useCallback, useEffect, useContext } from 'react';
import ApiHelper from '../../../utils/apiHelper';
import NoData from '../../common/NoData';
import { endpoints } from '../../../utils/URL';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Loader from '../../common/Loader';
import useAlertModal from '../../../hooks/useAlertModal';
import { AppContext, AppContextType } from '../../../context/AppContext';
import { useNavigate } from 'react-router-dom';

interface PropertyListingData {
	location: string;
	propertyType: string;
	propertyImages: string[];
	numberOfrooms: number;
	numberOfToilets: number;
	numberOfBathrooms: number;
	numberOfLivingRooms: number;
	numberOfKitchens: number;
	agentId: number;
}

const PropertyListing = () => {
	const { token } = useContext(AppContext) as AppContextType;

	const alert: any = useAlertModal()

	const api = new ApiHelper()

	const navigate = useNavigate();

	const [properties, setProperties] = useState<PropertyListingData[]>([]);
	const [loading, setLoading] = useState(false);

	const addProperty = () => {
		navigate('/property-listings/add');
	};

	const getProperties = useCallback(async () => {
		setLoading(true);

		try {
			const response = await api.getData(endpoints.PropertyListings.mainUrl, token);
			setProperties(response.data);
		} catch (error) {
			alert.setContent('Error getting property listings')
			alert.setVariant('error')
			alert.open()
			
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
		<div className=''>
			<div className='flex justify-between items-center'>
				<h1 className='text-2xl font-semibold'>Property Listings</h1>
				<button
					className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow'
					onClick={addProperty}
				>
					Add Property
				</button>
			</div>

			{loading && (
				<div className='flex justify-center items-center'>
					<Loader />
				</div>
			)}

			{!loading && properties.length === 0 && (
				<div className='flex justify-center items-center'>
					<NoData content='No Properties listed' />
				</div>
			)}

			{!loading && properties.length > 0 && (
				<div className='w-full overflow-x-hidden'>
					<table className='w-full table-auto border-collapse'>
						{tableHead}
						{tableBody}
					</table>
				</div>
			)}
		</div>
	);
};

export default PropertyListing;
