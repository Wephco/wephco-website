import { useState, useCallback, useEffect, useContext } from 'react';
import { ApiHelper } from '../../../utils/apiHelper';
import NoData from '../../common/NoData';
import { endpoints } from '../../../utils/URL';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Loader from '../../common/Loader';
import ErrorAlert from '../../common/alerts/ErrorAlert';
import { AppContext, AppContextType } from '../../../context/AppContext';

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

	const [properties, setProperties] = useState<PropertyListingData[]>([]);
	const [loading, setLoading] = useState(false);

	const getProperties = useCallback(async () => {
		setLoading(true);

		try {
			const response = await new ApiHelper().get(endpoints.PropertyListings.mainUrl, token);
			setProperties(response.data);
		} catch (error) {
			<ErrorAlert content='Error getting property listings' />;
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
		<>
			{properties.length > 0 ? (
				<>
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
				</>
			) : (
				<div className='flex justify-center items-center'>
					<NoData content='No Properties Found' />
				</div>
			)}
		</>
	);

	return (
		<div className='overflow-x-auto'>
			{loading ? (
				<div className='flex justify-center items-center'>
					<Loader />
				</div>
			) : (
				<table className='table table-zebra'>
					{tableHead}
					{tableBody}
				</table>
			)}
		</div>
	);
};

export default PropertyListing;
